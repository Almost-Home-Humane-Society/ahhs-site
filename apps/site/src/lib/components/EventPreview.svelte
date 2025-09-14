<script lang="ts">
  type Props = {
    date: Date;
    location: string;
    route: string;
    time: string;
    title: string;
  }

  let props: Props = $props();
  let monthName = $derived.by(() => {
    const month = props.date.getMonth();
    if (month === 0) return 'JAN';
    if (month === 1) return 'FEB';
    if (month === 2) return 'MAR';
    if (month === 3) return 'APR';
    if (month === 4) return 'MAY';
    if (month === 5) return 'JUN';
    if (month === 6) return 'JUL';
    if (month === 7) return 'AUG';
    if (month === 8) return 'SEP';
    if (month === 9) return 'OCT';
    if (month === 10) return 'NOV';
    if (month === 11) return 'DEC';
    return '';
  });
  let dayString = $derived.by(() => {
    const day = props.date.getDate();
    if (day < 10) return `0${day}`;
    return day.toString();
  })
</script>

<a aria-label={`${props.title} event on ${props.date.toLocaleDateString()}`} href={props.route} class="card w-full grid grid-cols-6 p-0 cursor-pointer">
  <div class="flex flex-row col-span-2 gap-0 h-full items-center justify-center bg-ahhs-red-400 dark:bg-ahhs-red-300 py-2 px-3 rounded-l-2xl border-ahhs-red-400 dark:border-ahhs-red-300 -ml-[1px] text-white">
    <div class="flex flex-row w-fit h-fit">
      <span class="text-xl font-bold">
        {monthName}
      </span>
      <span class="text-5xl font-extrabold mt-4">
        {dayString}
      </span>
    </div>
  </div>
  <div class="flex flex-col flex-auto col-span-4 gap-0 items-start py-2 px-3">
    <h3 class="flex flex-row justify-start text-start text-xl font-medium text-balance">{props.title}</h3>
    <span class="flex flex-row justify-start text-start text-sm text-alt text-balance gap-2 items-center">
      <span class="icon-[lucide--map-pin] size-3"></span>
      {props.location}
    </span>
    <span class="flex flex-row justify-start text-start text-sm text-alt text-balance gap-2 items-center">
      <span class="icon-[lucide--clock] size-3"></span>      
      {props.time}
    </span>
  </div>  
</a>

