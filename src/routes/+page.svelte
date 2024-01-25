<script lang="ts">
  import useCounter from '$lib/stores/counter.svelte';
  import Button from '$lib/components/button.svelte';

  let counter = useCounter();
</script>

<div class="flex gap-4">
  <Button onclick={() => counter.count++}>{counter.count}</Button>
  <Button disabled>{counter.double}</Button>
</div>
