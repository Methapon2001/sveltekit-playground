<script lang="ts">
  import Button from '$lib/components/button.svelte';
  import useCounter from './counter.svelte';

  let counter = useCounter();
</script>

<div class="flex flex-col items-center gap-4">
  <Button onclick={() => counter.count++}>Count: {counter.count}</Button>
  <Button disabled>Double: {counter.double}</Button>
</div>
