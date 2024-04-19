<script lang="ts">
  import Button from '$lib/components/button.svelte';
  import Input from '$lib/components/input.svelte';
  import useCounter from './counter.svelte';

  let counter = useCounter();
</script>

<div class="flex flex-col items-center gap-4">
  <Input class="text-center" bind:value={counter.count} />
  <Button onclick={() => counter.count++}>Count: {counter.count}</Button>
  <Button disabled>Double: {counter.double}</Button>
</div>
