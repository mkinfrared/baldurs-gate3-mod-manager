import path, { resolve } from "path";

import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        template: (variables, { tpl, options }) => {
          const assetName = path.basename((options.state as any).filePath);

          const templateResult = tpl`
            import {createElement} from "react";
            ${variables.imports};

            ${variables.interfaces};
            
            const ${variables.componentName} = (${variables.props}) => 
              createElement(
                 'svg',
                 Object.assign({}, props),
                 ${JSON.stringify(assetName)}
                );
             
            ${variables.exports};
            `;

          return templateResult;
        },
      },
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
  test: {
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
    dir: "./src",
    environment: "jsdom",
    setupFiles: "src/setupTests.ts",
    globals: true,
    coverage: {
      include: ["src/*"],
      exclude: ["**/__mocks__/*"],
      all: true,
      enabled: true,
      provider: "istanbul",
      reporter: ["lcov", "text"],
      lines: 5,
      functions: 5,
      branches: 5,
      statements: 5,
    },
  },
});
