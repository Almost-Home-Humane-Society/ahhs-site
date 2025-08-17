<script lang="ts">
	import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
	import PageTitle from "$lib/components/PageTitle.svelte";


</script>

<svelte:head>
  <title>Lost & Found Pets | AHHS</title>
  <meta name="description" content="Report a lost or found pet." />
</svelte:head>

<Breadcrumbs routes={[{name: 'Report a Lost or Found Animal', route: '/lost-and-found'}]} />
<div class="flex flex-col basis-full p-4 lg:p-8 gap-6">
  <PageTitle 
    title='Report a Lost or Found Pet'
  />
</div>