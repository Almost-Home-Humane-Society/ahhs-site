<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-col basis-full p-4 md:p-8 lg:px-12 2xl:px-24 pb-12 gap-6 relative">
	{@render children()}
</div>
