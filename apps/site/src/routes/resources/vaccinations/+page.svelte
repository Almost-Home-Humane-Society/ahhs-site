<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import { formatPhoneNumber } from '$lib/utils/formatters';
	import { vets } from './data';
</script>

<svelte:head>
	<title>Low Cost Vaccinations | AHHS</title>
	<meta
		name="description"
		content="Low cost vaccinations and medical care facilities we recommend in the greater Lafayette area."
	/>
</svelte:head>

<div class="flex flex-col basis-full gap-6">
	<PageTitle
		title="Low Cost Vaccinations & Medical Care"
		tag="Keep your costs low and your pet safe."
	></PageTitle>
	<PageWrapper>
		<div class="grid grid-cols-1 gap-6">
			<p class="text-base">
				Proper medical care is a big part of keeping your pet happy and healthy. Almost Home does
				not currently offer vaccine clinics, however, there are many other options available in the
				Greater Lafayette area. To establish a primary vet, check out our <a
					class="link"
					href="/resources/local">local resources page</a
				>!
			</p>
		</div>
		<section class="flex flex-col gap-2">
			<h3 class="text-2xl font-medium">Veterinarian Clinics</h3>
			<div role="list" class="grid grid-cols-1 gap-1 list-none md:px-4">
				{#each vets as item}
					<div role="listitem" class="flex flex-col gap-0">
						<span class="flex flex-row gap-2">
							{#if item.url}
								<a class="link" href={item.url} target="_blank">
									{item.url}
								</a>
							{:else}
								{item.name}
							{/if}
							{#if item.phone}
								<a class="link" href={item.phone} type="tel" target="_blank">
									{formatPhoneNumber(item.phone)}
								</a>
							{/if}
						</span>
						{#if item.notes}
							<span class="text-[0.8rem] italic text-neutral-600 dark:text-neutral-200 pl-4">
								(*{item.notes})
							</span>
						{/if}
					</div>
				{/each}
			</div>
		</section>
	</PageWrapper>
</div>
