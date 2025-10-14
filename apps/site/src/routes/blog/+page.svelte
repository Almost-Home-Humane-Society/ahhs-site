<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import type { PostPreviewType } from '$lib/types/PostPreview';
	import PostPreview from './components/PostPreview.svelte';
	import { getBlogPostsPreview } from './data.remote';

	const query = getBlogPostsPreview();
</script>

<svelte:head>
	<title>All Blog Posts | AHHS</title>
	<meta
		name="description"
		content="Stay informed about adopting pets, ownership, and serving our community."
	/>
</svelte:head>

<div class="flex flex-col basis-full gap-6">
	<PageTitle title="Blog" tag="Expanding on our experiences and knowledge." />
	<PageWrapper>
		{#if query.error}
			<p class="text-center text-red-500">Error loading posts</p>
		{:else}
			<div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 lg:px-12 xl:px-24">
				{#each query.current as post}
					<PostPreview {post} />
				{/each}
			</div>
		{/if}
	</PageWrapper>
</div>
