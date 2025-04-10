// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://joncoleman.me/",
  markdown: {
    shikiConfig: {
      theme: "none",
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".css")) {
              return "css/styles-[hash][extname]";
            }
            return "_astro/[name]-[hash][extname]";
          },
        },
      },
    },
  },
  // build: {
  //   assetsInlineLimit: 1024, // Link styles externally above 1024 bytes
  //   inlineStylesheets: "always", // Build the stylesheet inline in the header
  // },
});
