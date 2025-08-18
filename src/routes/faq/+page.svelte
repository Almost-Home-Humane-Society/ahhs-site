<script lang="ts">
	import AdoptionFees from '$lib/components/AdoptionFees.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	const currentYear = new Date();
	let priorYear = $derived.by<number>(() => {
		const returnValue = new Date();
		returnValue.setFullYear(returnValue.getFullYear() - 1);
		return returnValue.getFullYear();
	});
	let adoptionFaqExpanded = $state<boolean>(true);
	let generalFaqExpanded = $state<boolean>(true);
</script>

<svelte:head>
	<title>FAQs | AHHS</title>
	<meta
		name="description"
		content="Your donations allow us to do the work we do every day and help us fulfill our dreams for what we are able to do for pets in our community."
	/>
</svelte:head>

<div class="flex flex-col basis-full gap-6">
	<PageTitle title="Frequently Asked Questions" tag="Your questions answered." />
	<PageWrapper>
		<section class="flex flex-col gap-3 basis-full">
			<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<h3
				role="button"
				class="text-2xl font-medium gap-2 flex flex-row items-center cursor-pointer"
				onclick={() => (adoptionFaqExpanded = !adoptionFaqExpanded)}
			>
				Adoption FAQs
				{#if adoptionFaqExpanded}
					<span class="iconify lucide--chevron-up size-7"></span>
				{:else}
					<span class="iconify lucide--chevron-down size-7"></span>
				{/if}
			</h3>
			{#if adoptionFaqExpanded}
				<div class="flex flex-col basis-full gap-1 px-2 md:px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						What are the adoption fees?
					</h4>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-3 px-2 md:px-4 lg:px-8">
						<div class="flex flex-col w-full gap-1">
							<h5 class="text-lg font-medium">Dogs</h5>
							<AdoptionFees animalType="dog" />
						</div>
						<div class="flex flex-col w-full gap-1">
							<h5 class="text-lg font-medium">Cats</h5>
							<AdoptionFees animalType="cat" />
						</div>
					</div>
				</div>

				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						Do I need an appointment to visit or adopt?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						No! There is no appointment needed to visit our facility. We process adoptions during
						all business hours and encourage people to stop by!
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						Do you keep a list for adopters looking for a specific type of pet?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						No. With the number of animals coming through our doors, we are unable to keep an
						accurate list of those looking for specific pets. The best way to find a specific type
						of pet is to check the shelter and our website frequently. Look often, as we intake an
						abundance of species and breeds frequently!
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						How do you know the breeds of each dog?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Almost Home believes that every dog is an individual, though genetics play a role!
						Visual breed identification in dogs is unreliable, so for most of our dogs we can only
						guess their predominant breed or mix. We encourage you to select your new companion by
						considering each dog’s individual personality instead of relying on a breed label.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						What happens if more than one family is interested in the same pet?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						AHHS operates on a best-fit, first-come basis. The first home that fits the dogs needs
						will be approved for adoption. If you are declined for a dog, it does not mean you are
						not approved to adopt any dog. It means that there was a better fit, particularly for
						that individual dog's needs. We recommend checking out our other available dogs to see
						if a different one could be your perfect partner.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						What if I need to return or re-home my adopted pet?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						If you are no longer able to care for your adopted pet, AHHS will accept it back into
						its adoption program at any time. Please call ahead prior to arrival so we can ensure a
						kennel is set up. We will ask you to complete an Incoming Pet Profile to give us insight
						into the pets home habits and help match a future home.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						How can I adopt the stray pet that I found?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						AHHS must hold all of its stray pets for five full days to give an owner time to locate
						it. If the pet is not reclaimed within the five day period, it will be evaluated
						behaviorally and medically for adoption. Once it has been evaluated it will be placed up
						for adoption, under the same protocols as all other animals at AHHS. Almost Home will
						not release the exact date a pet may become available, so please check back frequently
						if you are interested in adopting.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						What happens if my new pet becomes ill after adoption?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						AHHS does its best to ensure that all pets are healthy at the time of adoption. However,
						the move to a new household is stressful and sometimes illness does occur. Any illnesses
						after adoption are the responsibility of the adopter to treat. AHHS strongly encourages
						using the complimentary vet exam within 7 days of adoption and participating in the
						30-day trial of insurance.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						What happens if I need to surrender my pet?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						AHHS is accepting pet surrenders as quickly as space is allowing! Please complete the
						surrender application under "Resources - Surrender a Pet". AHHS will then evaluate our
						ability to intake the pet with available resources and contact you to schedule the
						surrender appointment. As a no-kill facility, surrendered pets may stay with us as long
						as they need to find a home. This requires us to charge a small surrender fee to help
						provide for the animal while it is in our care.
					</p>
				</div>
			{/if}
		</section>
		<section class="flex flex-col gap-3 basis-full">
			<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<h3
				role="button"
				class="text-2xl font-medium gap-2 flex flex-row items-center cursor-pointer"
				onclick={() => (generalFaqExpanded = !generalFaqExpanded)}
			>
				General FAQs
				{#if generalFaqExpanded}
					<span class="iconify lucide--chevron-up size-[32px] lg:size-7"></span>
				{:else}
					<span class="iconify lucide--chevron-down size-[32px] lg:size-7"></span>
				{/if}
			</h3>
			{#if generalFaqExpanded}
				<div class="flex flex-col basis-full gap-1 px-2 md:px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						How long do pets stay at Almost Home Humane Society?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Almost Home has no time limit for pets in our care. Incoming pets must go through a
						decompression time, following a medical evaluation. Once up to date medically, and
						barring behavioral difficulties, pets are then available for adoption! The average
						length of stay for pets in 2023 was 40 days. Pets stay at Almost Home until they find
						the right forever home and in 2023 Almost Home's life-saving rate was 95%.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						How is AHHS funded?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						AHHS is completely private with no government funding or contracts. We rely solely on
						grants, adoption fees, services, and donations from the public to keep our doors open
						for animals in need. Almost Home is a private non-profit organization and is not
						affiliated with any national organization.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						Is Almost Home Humane Society a “No-Kill” organization?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Almost Home’s lifesaving rate for {priorYear} was 95% which is above the 90% standard to
						qualify as a no-kill organization. AHHS is an unlimited stay humane society that accepts
						surrenders and transfers of pets in need. Thanks to the generous donors who support our injured
						animal program, Almost Home is able to treat many illnesses and injuries. Our AHHS animal
						care staff go to great lengths to work with our behaviorally challenged animals. Unfortunately,
						some animals must be euthanized either for severe medical or behavioral reasons. Euthanasia
						is not taken lightly at AHHS as we strive to provide the best outcome for every animal we
						meet.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						How many pets does AHHS take in each year?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Almost Home serves more than 3,000 dogs, cats, rabbits, birds, guinea pigs and other
						pets each year through our variety of programs.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						Why does Almost Home charge an adoption fee for pets?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Almost Home makes every effort to ensure your new pet is ready for life in its home. All
						of our dogs and cats are spayed or neutered, microchipped, vaccinated, up to date on
						flea/tick and heartworm preventative, dewormed, and treated for any illnesses or
						injuries prior to adoption. Additionally, no animals have time-limits at our facility.
						The cost to prepare an animal for adoption is much higher than the adoption fee. To
						ensure we can provide this service to other animals in need, the adoption fee helps
						offset some of our care cost.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						How does AHHS determine the age and breed of adoptable pets?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Some pets arrive to AHHS as stray transfers with little to no history; others are
						surrenders. Age is estimated based upon the amount of tartar on teeth as well as the
						physical condition of the pet. Breed is an estimation based upon the size, body shape,
						and coloration. AHHS and our medical team take all traits into account to make our best
						estimate on age and breed, though we cannot guarantee either.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						Does AHHS accept owner-surrendered pets?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Almost Home Humane Society is classified as a limited-admission shelter. We intake any
						pets in need, space and resources allowing. Those interested in surrendering must
						complete the Surrender Application found under "Resources". AHHS Staff with determine
						our available space and resources and contact you to schedule the surrender appointment!
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						I’ve found an injured/orphaned wild animal. Can I bring it to AHHS?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Almost Home is not authorized to legally handle wildlife. Any orphaned or injured
						wildlife, or questions regarding wildlife should be directed to a licensed wildlife
						rehabilitator. You may contact Wildcat Wildlife Center at <a
							class="link"
							href="tel:+17654912351"
							target="_blank">(765) 491-2351</a
						> for information on wildlife.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						Can I report suspicions of animal cruelty AHHS?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Almost Home is not authorized to investigate cases of animal cruelty. If you are
						concerned about a pet please contact your local animal control (Lafayette: <a
							class="link"
							href="tel:+17658071200"
							target="_blank">(765) 807-1200</a
						>, West Lafayette: <a class="link" href="tel:+17657755200">(765) 775-5200</a>,
						Tippecanoe County: <a class="link" href="tel:+17654239321">(765) 423-9321</a>).
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						May I adopt a pet as a gift for someone else?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Adopting a pet is a personal decision and a lifetime commitment for the adopter. Almost
						Home feels it is very important to make a good match between adopter and pet and this
						often must be done in person. For this reason, AHHS does not allow pets to be adopted as
						gifts without the intended owner present.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						Do you sell pet supplies at Almost Home?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Yes! Almost Home has a small onsite retail store with everything you might need to get
						your new pet settled in it’s home. Everything from starter bags of pet food and litter
						to toys and leashes.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						What is a working cat?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Almost Home working cats are feral cats that are not able to be returned to a local
						community cat colony, but could provide mousing services for farms, barns, etc. Our
						working cats are typically not social with people. These cats are available to homes
						willing to provide shelter (barn, warehouse, outbuilding), food, and water. All AHHS
						working cats are available free of charge and are already spayed or neutered, ear
						tipped, and vaccinated.
					</p>
				</div>
				<div class="flex flex-col basis-full gap-1 px-4">
					<h4 class="text-xl font-medium text-ahhs-red-400 dark:text-ahhs-red-200">
						Will Almost Home euthanize my terminally ill pet?
					</h4>
					<p class="px-2 md:px-4 lg:px-8">
						Unfortunately, we are unable to provide euthanasia services to the public. We recommend
						contacting your primary veterinarian or emergency vet services.
					</p>
				</div>
			{/if}
		</section>
	</PageWrapper>
</div>
