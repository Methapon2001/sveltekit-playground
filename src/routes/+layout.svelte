<script lang="ts">
  import '@unocss/reset/sanitize/sanitize.css';
  import '@unocss/reset/sanitize/assets.css';

  import 'uno.css';

  import '$lib/main.css';

  const { children } = $props();
</script>

<article class=":uno: font-sans p-4">
  {@render children()}
</article>
