import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import auth from 'auth-astro';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [auth(), react()],
  adapter: node({
    mode: "standalone"
  })
});