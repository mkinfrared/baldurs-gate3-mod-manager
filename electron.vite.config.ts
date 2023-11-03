import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin({
        exclude: ["prettier", "@prettier/plugin-xml"],
      }),
    ],
    resolve: {
      alias: {
        "@common": resolve("src/common"),
        "@main": resolve("src/main"),
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        "@common": resolve("src/common"),
        "@main": resolve("src/main"),
        "@preload": resolve("src/preload"),
      },
    },
  },
  renderer: {
    plugins: [
      svgr({
        include: "**/*.svg",
      }),
      react(),
    ],
    resolve: {
      alias: {
        "@common": resolve("src/common"),
        "@main": resolve("src/main"),
        "@preload": resolve("src/preload"),
        "@renderer": resolve("src/renderer/src"),
      },
    },
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
  },
});
