<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import { formatPhoneNumber } from '$lib/utils/formatters';
	import { boarders, groomers, trainers, vets } from './data';
</script>

<svelte:head>
	<title>Local Resources | AHHS</title>
	<meta
		name="description"
		content="Local vets, boarding facilities, trainers, and grooming services we recommend in the greater Lafayette area."
	/>
</svelte:head>

<div class="flex flex-col basis-full gap-6">
	<PageTitle
		title="Local Resources"
		tag="Our trusted partners to keep your pet healthy, happy, trained, and safe."
	></PageTitle>
	<PageWrapper>
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
		<section class="flex flex-col gap-2">
			<h3 class="text-2xl font-medium">Boarding Facilities</h3>
			<div role="list" class="grid grid-cols-1 gap-1 list-none md:px-4">
				{#each boarders as item}
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
		<section class="flex flex-col gap-2">
			<h3 class="text-2xl font-medium">Grooming Services</h3>
			<div role="list" class="grid grid-cols-1 gap-1 list-none md:px-4">
				{#each groomers as item}
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
		<section class="flex flex-col gap-2">
			<h3 class="text-2xl font-medium">Behavior and Obedience Training</h3>
			<div role="list" class="grid grid-cols-1 gap-1 list-none md:px-4">
				{#each trainers as item}
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
