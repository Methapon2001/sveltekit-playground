export default function useCounter() {
  let count = $state(0);
  let double = $derived(count * 2);

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
