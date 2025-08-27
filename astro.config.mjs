// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// import vercel from "@astrojs/vercel";

import react from "@astrojs/react";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://www.teraiz.com",
  // output: "server",
  // adapter: vercel(),
  output: "static",

  integrations: [react(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
