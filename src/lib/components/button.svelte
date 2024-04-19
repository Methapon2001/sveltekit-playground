<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    onclick?: (e: MouseEvent) => void;
    children?: Snippet;
    id?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string | number;
    name?: string;
    title?: string;
    disabled?: boolean;
    hidden?: boolean;
    style?: string;
    class?: string;
    [rest: string]: unknown;
  };

  let { children, class: className, ...attr }: Props = $props();
</script>

<button
  class=":uno: {className}
  outline-none px-4 py-2 border-none rounded transition shadow-md cursor-pointer select-none font-semibold bg-blue-500 text-white
  active:scale-95 active:bg-blue-600 disabled:scale-100 disabled:opacity-70 disabled:bg-gray-400 disabled:cursor-none"
  {...attr}
>
  {#if children}
    {@render children()}
  {/if}
</button>
