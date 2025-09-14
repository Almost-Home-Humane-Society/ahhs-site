<script lang="ts">
	import { getDogListing } from '$lib/utils/listing';
	import { createQuery } from '@tanstack/svelte-query';

	const query = createQuery({
		queryKey: ['available-dogs'],
		queryFn: async () => getDogListing()
	});
</script>
