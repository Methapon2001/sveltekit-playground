import type { LayoutLoad } from './$types';

export let ssr = false;

export const load = (async () => {
  return {};
}) satisfies LayoutLoad;
