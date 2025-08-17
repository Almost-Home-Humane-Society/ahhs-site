<script lang="ts">
  type Props = {
    image1: { src: string, name: string };
    image2: { src: string, name: string };
  }

  let { image1, image2 }: Props = $props();
</script>

<div class="absolute top-0 left-0 bg-ahhs-blue-200 rounded-2xl flex flex-row w-full h-[200px] xl:h-[300px]">
</div>

<div class="absolute top-0 left-0 bg-ahhs-orange-300 rounded-2xl flex flex-row w-full h-[200px] xl:h-[300px] rotate-10 shadow-sm translate-x-10 translate-y-4">
  <img 
    alt={image1.name}
    class="h-full w-full rounded-2xl"
    src={image1.src}
  />
</div>

<div class="absolute top-0 left-0 bg-ahhs-purple-300 rounded-2xl flex flex-row w-full h-[200px] xl:h-[300px] -rotate-10 shadow-sm -translate-x-10 translate-y-4">
  <img 
    alt={image2.name}
    class="h-full w-full rounded-2xl"
    src={image2.src}
  />  
</div>
