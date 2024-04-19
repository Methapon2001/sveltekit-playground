<script lang="ts">
  type Props = {
    onclick?: (e: MouseEvent) => void;
    onkeydown?: (e: KeyboardEvent) => void;
    onfocus?: (e: FocusEvent) => void;
    onblur?: (e: FocusEvent) => void;
    value: number | string | boolean;
    id?: string;
    style?: string;
    class?: string;
    name?: string;
    title?: string;
    disabled?: boolean;
    hidden?: boolean;
  };

  let { class: className, value = $bindable(), ...rest }: Props = $props();
</script>

<input
  {...rest}
  bind:value
  class=":uno: {className}
  outline-none px-4 py-2 rounded transition shadow-sm border
  disabled:opacity-70 disabled:bg-gray-100 disabled:cursor-default
  active:border-blue-400 focus:border-blue-400"
/>
