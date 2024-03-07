import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://yichifauzi.github.io",
  base: "/DBOP-Installtutorial",
  integrations: [tailwind(), react(),preact()]
});