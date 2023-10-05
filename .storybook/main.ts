import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import tsConfig from "../tsconfig.json";

const tsBaseUrl = tsConfig.compilerOptions.baseUrl || "src";

const rootPath = path.join(__dirname, "../..");
const srcPath = path.join(rootPath, tsBaseUrl);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpack: (webpackConfig) => {
    if (!webpackConfig.resolve) {
      webpackConfig.resolve = {};
    }

    const modules = webpackConfig.resolve.modules ?? [];

    modules.unshift(srcPath);

    webpackConfig.resolve.modules = modules;

    return webpackConfig;
  },
};
export default config;
