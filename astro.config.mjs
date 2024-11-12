import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ahmedbasabaien123.github.io',
  base: '/ESP',
  output: 'static',  // Ajout de cette ligne
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    assets: 'astro'  // Ajout de cette ligne
  }
});
