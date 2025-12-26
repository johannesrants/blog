import { defineConfig } from 'astro/config';

// For GitHub Pages:
// - If repo is named "username.github.io", use site: 'https://username.github.io' and no base
// - If repo has another name (e.g., "blog"), use base: '/blog' and site: 'https://username.github.io'
export default defineConfig({
  site: 'https://johannesrants.github.io',
  base: '/blog',
  integrations: [],
});

