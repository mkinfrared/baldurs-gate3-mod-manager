/* eslint-disable import/no-import-module-exports */
import "webpack-dev-server";
import { execSync, spawn } from "child_process";
import fs from "fs";
import path from "path";

import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import chalk from "chalk";
import HtmlWebpackPlugin from "html-webpack-plugin";
import postcssPresetEnv from "postcss-preset-env";
import webpack from "webpack";
import { merge } from "webpack-merge";

import checkNodeEnv from "../scripts/check-node-env";
import getLocalIdent from "../scripts/getLocalIdent";

import baseConfig from "./webpack.config.base";
import webpackPaths from "./webpack.paths";

// When an ESLint server is running, we can't set the NODE_ENV so we'll check if it's
// at the dev webpack config is not accidentally run in a production environment
if (process.env.NODE_ENV === "production") {
  checkNodeEnv("development");
}

const port = process.env.PORT || 1212;
const manifest = path.resolve(webpackPaths.dllPath, "renderer.json");
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const skipDLLs =
  module.parent?.filename.includes("webpack.config.renderer.dev.dll") ||
  module.parent?.filename.includes("webpack.config.eslint");

/**
 * Warn if the DLL is not built
 */
if (
  !skipDLLs &&
  !(fs.existsSync(webpackPaths.dllPath) && fs.existsSync(manifest))
) {
  console.log(
    chalk.black.bgYellow.bold(
      'The DLL files are missing. Sit back while we build them for you with "npm run build-dll"',
    ),
  );

  execSync("npm run postinstall");
}

const configuration: webpack.Configuration = {
  devtool: "inline-source-map",

  mode: "development",

  target: ["web", "electron-renderer"],

  entry: [
    `webpack-dev-server/client?http://localhost:${port}/dist`,
    "webpack/hot/only-dev-server",
    path.join(webpackPaths.srcRendererPath, "index.tsx"),
  ],

  output: {
    path: webpackPaths.distRendererPath,
    publicPath: "/",
    filename: "renderer.dev.js",
    library: {
      type: "umd",
    },
  },

  module: {
    rules: [
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use MiniCSSExtractPlugin to extract that CSS
      // to a file, but in development "style" loader enables hot editing
      // of CSS.
      // By default we support CSS Modules with the extension .module.css
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: true,
              importLoaders: 2,
              modules: {
                auto: true,
                getLocalIdent,
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
        ],
      },
      {
        test: sassModuleRegex,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: true,
              importLoaders: 2,
              modules: {
                auto: true,
                getLocalIdent,
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer", postcssPresetEnv({ stage: 0 })],
              },
            },
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                sourceMap: true,
                sourceMapContents: false,
              },
            },
          },
        ],
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer", postcssPresetEnv({ stage: 0 })],
              },
            },
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                sourceMap: true,
                sourceMapContents: false,
              },
            },
          },
        ],
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      // Images
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // SVG
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    ...(skipDLLs
      ? []
      : [
          new webpack.DllReferencePlugin({
            context: webpackPaths.dllPath,
            manifest: require(manifest),
            sourceType: "var",
          }),
        ]),

    new webpack.NoEmitOnErrorsPlugin(),

    /**
     * Create global constants which can be configured at compile time.
     *
     * Useful for allowing different behaviour between development builds and
     * release builds
     *
     * NODE_ENV should be production so that modules do not perform certain
     * development checks
     *
     * By default, use 'development' as NODE_ENV. This can be overriden with
     * 'staging', for example, by changing the ENV variables in the npm scripts
     */
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),

    new ReactRefreshWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: path.join("index.html"),
      template: path.join(webpackPaths.srcRendererPath, "index.ejs"),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
      isBrowser: false,
      env: process.env.NODE_ENV,
      isDevelopment: process.env.NODE_ENV !== "production",
      nodeModules: webpackPaths.appNodeModulesPath,
    }),
  ],

  node: {
    __dirname: false,
    __filename: false,
  },

  devServer: {
    port,
    compress: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    static: {
      publicPath: "/",
    },
    historyApiFallback: {
      verbose: true,
    },
    setupMiddlewares(middlewares) {
      console.log("Starting preload.js builder...");

      const preloadProcess = spawn("npm", ["run", "start:preload"], {
        shell: true,
        stdio: "inherit",
      })
        .on("close", (code: number) => process.exit(code!))
        .on("error", (spawnError) => console.error(spawnError));

      console.log("Starting Main Process...");

      let args = ["run", "start:main"];

      if (process.env.MAIN_ARGS) {
        args = args.concat(
          ["--", ...process.env.MAIN_ARGS.matchAll(/"[^"]+"|[^\s"]+/g)].flat(),
        );
      }

      spawn("npm", args, {
        shell: true,
        stdio: "inherit",
      })
        .on("close", (code: number) => {
          preloadProcess.kill();

          process.exit(code!);
        })
        .on("error", (spawnError) => console.error(spawnError));

      return middlewares;
    },
  },
};

export default merge(baseConfig, configuration);
