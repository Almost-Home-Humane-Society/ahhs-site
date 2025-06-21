<script>
	import Logo from "$lib/Logo.svelte";

</script>
<div class="flex flex-col gap-6 w-full items-center">
  <div class="grid grid-cols-1 gap-3 p-4 w-full lg:w-10/12">
    <div class="flex flex-row gap-3 items-center justify-center">
      <Logo class="size-40" />
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl lg:text-5xl font-bold text-ahhs-blue-500 dark:text-white">Almost Home Humane Society</h1>
        <span class="text-lg lg:text-4xl font-bold text-ahhs-red-500 dark:text-ahhs-red-200">Adopt a friend. Save a life.</span>
      </div>    
    </div>
    <div class="flex flex-row justify-center w-full">
    <p class="text-base lg:px-12 text-center lg:max-w-10/12 xl:max-w-3/4 2xl:max-w-2/3">
      Almost Home Humane Society is a non-profit animal rescue shelter serving more than 3,000 annually in the greater Lafayette, Indiana area. AHHS accepts owner surrendered pets and pets transferred from other animal welfare organizations as shelter capacity allows and only by scheduled appointment.
    </p>
    </div>
  </div>
  <section class="py-4 px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200">
    <h2 class="text-3xl font-medium">Pet Adoptions</h2>
    <p>
      Blurb about what AHHS pet adoption services/commitment is etc. Selling point here for adoptions.
    </p>

    <button class="btn-primary">
      Learn More
      <span class="iconify lucide--chevron-right size-5"></span>
    </button>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
    <div class="block">
      <div class="flex flex-row flex-auto relative">
        <img 
          src="ahhs_dog_1.webp"
          alt="Dog"
          class="w-full h-48 lg:h-56 object-cover rounded-2xl"
        />
        <button class="btn-primary w-fit rounded-full px-4 absolute bottom-2 right-2 shadow-md shadow-neutral-800/60">
          View Available Dogs
          <span class="iconify lucide--chevron-right size-5"></span>
        </button>        
      </div>
    </div>
    <div class="block">
      <div class="flex flex-row flex-auto relative">
        <img 
          src="ahhs_cat_1.webp"
          alt="Cat"
          class="w-full h-48 lg:h-56 object-cover rounded-2xl"
        />
        <button class="btn-primary w-fit rounded-full px-4 absolute bottom-2 right-2 shadow-md shadow-neutral-800/60">
          View Available Cats
          <span class="iconify lucide--chevron-right size-5"></span>
        </button>        
      </div>
    </div>  
    <div class="block">
      <div class="flex flex-row flex-auto relative">
        <img 
          src="ahhs_rabbit_1.webp"
          alt="Rabbit"
          class="w-full h-48 lg:h-56 object-cover rounded-2xl"
        />
        <button class="btn-primary w-fit rounded-full px-4 absolute bottom-2 right-2 shadow-md shadow-neutral-800/60">
          View Available Pocket Pets
          <span class="iconify lucide--chevron-right size-5"></span>
        </button>        
      </div>
    </div>       
    </div>
  </section>
  <section class="py-4 px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200">
    <h2 class="text-3xl font-medium">Events</h2>
    <p>
      Blurb about AHHS in the community, etc. 
    </p>
    <button class="btn-primary">
      View All Events
      <span class="iconify lucide--chevron-right size-5"></span>
    </button>    
    <h3 class="text-lg font-medium">Upcoming</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 lg:gap-6">
      <button class="card w-full flex flex-row p-0 cursor-pointer">
        <div class="flex flex-row gap-0 min-w-fit w-1/3 lg:w-fit h-full items-center justify-center bg-ahhs-red-300 py-2 px-3 rounded-l-2xl border-ahhs-red-300 -ml-[1px]">
          <div class="flex flex-row w-fit h-fit">
          <span class="text-xl font-bold">
            JUN
          </span>
          <span class="text-5xl font-extrabold mt-4">
            24
          </span>
          </div>
        </div>
        <div class="flex flex-col flex-auto gap-0 items-start py-2 px-3">
          <h3 class="text-xl font-medium">Event Title</h3>
          <span class="text-sm text-alt">123 Example Rd, Lafayette IN</span>
          <span class="text-sm text-alt">9:00am - 2:00pm</span>
        </div>
      </button>
      <button class="card w-full flex flex-row p-0 cursor-pointer">
        <div class="flex flex-row gap-0 min-w-fit w-1/3 lg:w-fit h-full items-center justify-center bg-ahhs-red-300 py-2 px-3 rounded-l-2xl border-ahhs-red-300 -ml-[1px]">
          <div class="flex flex-row w-fit h-fit">
          <span class="text-xl font-bold">
            JUL
          </span>
          <span class="text-5xl font-extrabold mt-4">
            05
          </span>
          </div>
        </div>
        <div class="flex flex-col flex-auto gap-0 items-start py-2 px-3">
          <h3 class="text-xl font-medium">Event Title</h3>
          <span class="text-sm text-alt">123 Example Rd, Lafayette IN</span>
          <span class="text-sm text-alt">9:00am - 2:00pm</span>
        </div>
      </button>
      <button class="card w-full flex flex-row p-0 cursor-pointer">
        <div class="flex flex-row gap-0 min-w-fit w-1/3 lg:w-fit h-full items-center justify-center bg-ahhs-red-300 py-2 px-3 rounded-l-2xl border-ahhs-red-300 -ml-[1px]">
          <div class="flex flex-row w-fit h-fit">
          <span class="text-xl font-bold">
            AUG
          </span>
          <span class="text-5xl font-extrabold mt-4">
            17
          </span>
          </div>
        </div>
        <div class="flex flex-col flex-auto gap-0 items-start py-2 px-3">
          <h3 class="text-xl font-medium">Event Title</h3>
          <span class="text-sm text-alt">123 Example Rd, Lafayette IN</span>
          <span class="text-sm text-alt">9:00am - 2:00pm</span>
        </div>
      </button>            
    </div>
  </section>    
  <section class="py-4 px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200">
    <h2 class="text-3xl font-medium">Contact Us</h2>
  </section>  
</div>