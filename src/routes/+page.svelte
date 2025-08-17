<script>
  import EventPreview from '$lib/components/EventPreview.svelte';
  import PetAdoptionSection from '$lib/components/PetAdoptionSection.svelte';
</script>

<svelte:head>
  <title>Home | AHHS</title>
  <meta
    name="description"
    content="Welcome to Almost Home Humane Society: a non-profit animal rescue shelter servicing the greater Lafayette, Indiana area."
  />
</svelte:head>

<div class="flex flex-col gap-6 w-full items-center">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 p-4 w-full lg:w-10/12">
    <div class="flex flex-col gap-3 items-center justify-around py-6">
      <span
        class="text-2xl lg:text-4xl xl:text-5xl font-bold text-ahhs-red-500 dark:text-ahhs-red-200 text-center text-pretty"
        >Adopt a friend. Save a life.</span
      >
      <p class="text-base lg:text-xl 2xl:text-2xl lg:px-12 text-center">
        Almost Home Humane Society is a non-profit animal rescue shelter serving
        more than 3,000 annually in the greater Lafayette, Indiana area. AHHS
        accepts owner surrendered pets and pets transferred from other animal
        welfare organizations as shelter capacity allows and only by scheduled
        appointment.
      </p>
    </div>
    <div class="flex flex-row justify-center w-full h-[50vh] relative p-4">
      <img
        class="absolute h-1/2 w-1/3 top-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]"
        alt="Young girl with cat"
        src="child_cat.webp"
      />
      <img
        class="absolute h-1/2 w-2/3 bottom-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]"
        alt="Woman playing with cat and dog"
        src="dog_cat_girl.webp"
      />
      <img
        class="absolute h-1/2 w-1/3 bottom-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]"
        alt="Woman holding dog on a hike"
        src="woman_dog.webp"
      />
      <img
        class="absolute h-1/2 w-2/3 top-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]"
        alt="Male sitting with dog"
        src="dog_guy.webp"
      />
    </div>
  </div>
  <PetAdoptionSection />
  <section
    class="py-4 px-2 lg:px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200"
  >
    <h2 class="text-3xl font-medium">Events</h2>
    <p>Blurb about AHHS in the community, etc.</p>
    <button class="btn-primary">
      View All Events
      <span class="iconify lucide--chevron-right size-5"></span>
    </button>
    <h3 class="text-xl font-medium">Upcoming</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 lg:gap-6">
      <EventPreview
        date={new Date(2025, 6, 24)}
        location="123 Example Rd, Lafayette IN"
        route="/events/1"
        time="9:00am - 2:00pm"
        title="Example Event"
      />
      <EventPreview
        date={new Date(2025, 7, 5)}
        location="123 Example Rd, Lafayette IN"
        route="/events/2"
        time="9:00am - 2:00pm"
        title="Example Event"
      />
      <EventPreview
        date={new Date(2025, 9, 17)}
        location="123 Example Rd, Lafayette IN"
        route="/events/3"
        time="9:00am - 2:00pm"
        title="Example Event"
      />
    </div>
  </section>
  <section
    class="py-4 px-2 lg:px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200"
  >
    <h2 class="text-3xl font-medium">About Us</h2>
    <p>
      Almost Home Humane Society was formed as the Tippecanoe County Humane
      Association in 1939 and since that time has been dedicated to the care of
      pets in our community. Today, Almost Home serves more than 3,000 pets each
      year through its programs.
    </p>
    <p>
      AHHS is a private, non-profit organization and is not directly affiliated
      with any national organizations or coalitions. Almost Home serves the
      Greater Lafayette area and the animals within. AHHS accepts owner
      surrendered pets and pets transferred from other animal welfare
      organizations as shelter capacity allows and only by scheduled
      appointment.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="card w-full gap-6">
        <img
          src="ahhs_mission_2.webp"
          alt="Dog"
          class="w-full h-48 lg:h-56 object-cover rounded-2xl rounded-b-none"
        />
        <div class="flex flex-col w-full py-4 px-5 gap-3">
          <h3 class="text-2xl font-medium">Mission</h3>
          <p class="px-4">
            Almost Home Humane Society (AHHS) inspires a more humane community
            by educating, providing resources and collaborating to improve the
            lives of animals and their families.
          </p>
        </div>
      </div>
      <div class="card w-full gap-6">
        <img
          src="ahhs_vision_1.webp"
          alt="Dog"
          class="w-full h-48 lg:h-56 object-cover rounded-2xl rounded-b-none"
        />
        <div class="flex flex-col w-full py-4 px-5 gap-3">
          <h3 class="text-2xl font-medium">Vision</h3>
          <p class="px-4">
            Almost Home Humane Society is Tippecanoe County’s leading animal
            care and resource organization.
          </p>
        </div>
      </div>
      <div class="card w-full gap-6">
        <img
          src="ahhs_values_1.webp"
          alt="Dog"
          class="w-full h-48 lg:h-56 object-cover rounded-2xl rounded-b-none"
        />
        <div class="flex flex-col w-full py-4 px-5 gap-3">
          <h3 class="text-2xl font-medium">Values</h3>
          <div class="grid grid-cols-1 xl:grid-cols-2 px-4">
            <div
              class="flex flex-row items-center gap-3 text-start justify-start"
            >
              <span
                class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"
              ></span>
              Empathy
            </div>
            <div
              class="flex flex-row items-center gap-3 text-start justify-start"
            >
              <span
                class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"
              ></span>
              Collaboration
            </div>
            <div
              class="flex flex-row items-center gap-3 text-start justify-start"
            >
              <span
                class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"
              ></span>
              Compassion
            </div>
            <div
              class="flex flex-row items-center gap-3 text-start justify-start"
            >
              <span
                class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"
              ></span>
              Dedication
            </div>
            <div
              class="flex flex-row items-center gap-3 text-start justify-start"
            >
              <span
                class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"
              ></span>
              Patience
            </div>
            <div
              class="flex flex-row items-center gap-3 text-start justify-start"
            >
              <span
                class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"
              ></span>
              Leadership
            </div>
            <li
              class="flex flex-row items-center gap-3 text-start justify-start"
            >
              <span
                class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"
              ></span>
              Passion
            </li>
            <div
              class="flex flex-row items-center gap-3 text-start justify-start"
            >
              <span
                class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"
              ></span>
              Respect
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
