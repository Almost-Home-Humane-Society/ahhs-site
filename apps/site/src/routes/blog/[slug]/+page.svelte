<script lang="ts">
	import { page } from '$app/state';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { Spinner } from '$lib/components/ui/spinner';
	import { client, urlFor } from '$lib/sanity/client';
	import type { Author, Post } from '$lib/sanity/sanity.types';
	import { createQuery } from '@tanstack/svelte-query';
	import { PortableText } from '@portabletext/svelte';

	let { params } = page;
	let slug = $derived.by(() => params.slug);

	const query = createQuery<Post | undefined>(() => ({
		queryKey: ['post', slug],
		queryFn: async () => {
			const query = `
        *[_type == "post" && slug.current == $slug]
        {
          _id,
          title,
          body,
          publishedAt,
          mainImage,
          categories[]->,
          author->
        }[0]
      `;
			const post = await client.fetch(query, {
				slug
			});
			if (!post) return undefined;
			return post as Post;
		}
	}));

	const post = $derived.by(() => query.data);

	const dateString = $derived.by<string | undefined>(() => {
		if (!post?.publishedAt) return undefined;
		return new Date(post.publishedAt).toLocaleDateString();
	});

	const authorName = $derived.by<string | undefined>(() => {
		if (!post?.author) return undefined;
		return (post.author as unknown as Author).name;
	});

	const title = $derived.by(() => {
		return post?.title ?? 'Post Details';
	});

	const tag = $derived.by(() => {
		if (dateString && authorName) {
			return `By ${authorName} on ${dateString}`;
		} else if (dateString) {
			return dateString;
		} else if (authorName) {
			return `By ${authorName}`;
		} else {
			return undefined;
		}
	});
</script>

<div class="flex flex-col basis-full gap-6">
	{#if query.isLoading}
		<div class="flex flex-col basis-full items-center justify-center gap-2 text-center">
			<Spinner class="size-16 text-ahhs-red" />
			<span class="text-lg font-medium text-alt">Loading Post...</span>
		</div>
	{:else if post}
		<PageTitle {title} {tag} />
		<div class="flex flex-col gap-3 items-center lg:inline px-2 lg:px-12 xl:px-24">
			{#if post?.mainImage}
				<img
					src={urlFor(post.mainImage).url()}
					alt="Post"
					class="lg:w-1/3 max-h-[320px] object-cover rounded-2xl flex flex-row basis-full lg:float-left mx-4 my-2"
				/>
			{/if}
			<div class="prose flex flex-col lg:inline w-full">
				<PortableText value={post.body} />
			</div>
			<!-- <div
				class="prose flex flex-col basis-full items-center lg:w-3/4 xl:w-2/3 lg:max-w-3/4 xl:max-w-2/3"
			>
				<PortableText value={post.body} />
			</div> -->
		</div>
	{:else}
		<div class="flex flex-col basis-full items-center justify-center text-center">
			<span class="text-ahhs-red font-medium">Error loading post details</span>
		</div>
	{/if}
</div>
