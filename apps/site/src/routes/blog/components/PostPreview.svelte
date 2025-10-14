<script lang="ts">
	import { urlFor } from '$lib/sanity/client';
	import type { internalGroqTypeReferenceTo, Post } from '$lib/sanity/sanity.types';
	import type { PostPreviewType } from '$lib/types/PostPreview';

	type Props = {
		post: PostPreviewType;
	};

	let { post }: Props = $props();

	const dateString = $derived.by(() =>
		post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Unknown Date'
	);
	const slug = $derived.by(() => {
		return `${post.slug?.current ?? ''}`;
	});

	$inspect(post);
</script>

<a
	aria-label={`${post.title}`}
	href={`/blog/${slug}`}
	class="card w-full grid grid-cols-6 p-0 cursor-pointer"
>
	{#if post.mainImage}
		<div class="flex flex-row h-full col-span-2 rounded-l-2xl">
			<img
				src={urlFor(post.mainImage).url()}
				alt="Event"
				class="w-full h-full object-cover rounded-l-[0.95rem]"
			/>
		</div>
	{:else}
		<div
			class="flex flex-row col-span-2 gap-0 h-full items-center justify-center bg-ahhs-red-400 dark:bg-ahhs-red-300 py-2 px-3 rounded-l-2xl border-ahhs-red-400 dark:border-ahhs-red-300 -ml-[1px] text-white"
		>
			<span class="icon-[fluent--textbox-16-filled] size-24"></span>
		</div>
	{/if}
	<div class="flex flex-col flex-auto basis-full col-span-4 gap-1 items-start py-2 px-3">
		<div class="flex flex-col basis-full gap-1">
			<h3 class="flex flex-row justify-start text-start text-xl font-medium text-balance">
				{post.title}
			</h3>
			<span
				class="flex flex-row justify-start text-start text-sm text-alt text-balance gap-2 items-center leading-4"
			>
				<span class="icon-[lucide--user-round-pen] size-3 text-ahhs-red"></span>
				{post.author?.name ?? 'Unknown'}
			</span>
			{#if dateString}
				<span
					class="flex flex-row justify-start text-start text-sm text-alt text-balance gap-2 items-center leading-4"
				>
					<span class="icon-[lucide--calendar] size-3 text-ahhs-red"></span>
					{dateString}
				</span>
			{/if}
			<div class="flex flex-row gap-2 flex-wrap w-full items-center mt-2">
				{#each post.categories as category}
					<div
						class="flex flex-row items-center justify-center text-center rounded-full border border-ahhs-blue/10 dark:border-ahhs-blue-200 text-xs font-medium px-3 py-0.5 text-ahhs-blue dark:text-ahhs-blue-50 bg-ahhs-blue/10 dark:bg-ahhs-blue/50"
					>
						{category.title}
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-row w-full justify-end">
			<div class="btn-primary-sm">
				View
				<span class="iconify lucide--chevron-right size-5"></span>
			</div>
		</div>
	</div>
</a>
