let count = $state<number>(0);
let double = $derived(count * 2);

export default function useCounter() {
  return {
    get count() {
      return count;
    },
    get double() {
      return double;
    },
    set count(v) {
      count = v;
    },
  };
}
