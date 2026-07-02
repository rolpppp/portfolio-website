import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://rolpppp.github.io',

  // Uncomment and set to your repo name when deploying as a project site:
  // base: '/portfolio-website',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});