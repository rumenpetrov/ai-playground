import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import auth from 'auth-astro';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    auth(),
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    icon({
      include: {
        // Include only these `mdi` icons in the bundle
        // mdi: ['exit-to-app', 'chat'],
        // Include all `uis` icons
        uis: ['*']
      }
    }),
  ],
  adapter: node({
    mode: "standalone"
  })
});
