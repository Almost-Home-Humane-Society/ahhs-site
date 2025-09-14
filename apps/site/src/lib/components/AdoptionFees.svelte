<script lang="ts">
  type Props = {
    animalType: 'dog' | 'cat'
  }

  let props: Props = $props();

  type Fee = {
    age: string;
    cost: string;
  }

  const dogFees: Fee[] = [
    { age: 'Puppies under 6 months old', cost: '$200' },
    { age: 'Dogs 7 months old to 6 years old', cost: '$150' },
    { age: 'Dogs 7 years old or older', cost: '$100' },
  ];

  const catFees: Fee[] = [
    { age: 'Kittens 5 months old and under', cost: '$150' },
    { age: 'Kittens from 6 months up to 1 year old', cost: '$100' },
    { age: 'Adult cats from 2 years old up to 7 years old', cost: '$75' },
    { age: 'Adult cats over 7 years', cost: '$25' },
    { age: 'Working cats *', cost: 'No fee' },
  ];

  let rows = $derived.by(() => props.animalType === 'dog' ? [...dogFees] : [...catFees]);
</script>

<table class="table">
  <thead>
    <tr>
      <th align="center">Age</th>
      <th align="center">Fee</th>
    </tr>
  </thead>
  <tbody>
    {#each  rows as row}
      <tr>
        <td align="center">{row.age}</td>
        <td align="center">{row.cost}</td>
      </tr>
    {/each}
  </tbody>
</table>



