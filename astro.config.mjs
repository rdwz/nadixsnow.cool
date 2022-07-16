import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), preact()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
})