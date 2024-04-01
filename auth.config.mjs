import GitHub from '@auth/core/providers/github';
// import Passkey from "@auth/core/providers/passkey"
import { defineConfig } from 'auth-astro';

export default defineConfig({
  providers: [
    // Passkey,
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});