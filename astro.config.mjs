// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  server: { port: 3000 },
  integrations: [
    tailwind(),
    icon(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
  image: {
    domains: ["res.cloudinary.com"],
  },
});
