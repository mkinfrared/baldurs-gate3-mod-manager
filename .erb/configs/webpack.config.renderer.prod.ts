/**
 * Build config for electron renderer process
 */

import path from "path";

import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import postcssPresetEnv from "postcss-preset-env";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { merge } from "webpack-merge";

import checkNodeEnv from "../scripts/check-node-env";
import deleteSourceMaps from "../scripts/delete-source-maps";
import getLocalIdent from "../scripts/getLocalIdent";

import baseConfig from "./webpack.config.base";
import webpackPaths from "./webpack.paths";

checkNodeEnv("production");

deleteSourceMaps();

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const configuration: webpack.Configuration = {
  devtool: "source-map",

  mode: "production",

  target: ["web", "electron-renderer"],

  entry: [path.join(webpackPaths.srcRendererPath, "index.tsx")],

  output: {
    path: webpackPaths.distRendererPath,
    publicPath: "./",
    filename: "renderer.js",
    library: {
      type: "umd",
    },
  },

  module: {
    rules: [
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin,
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
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
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

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },

  plugins: [
    /**
     * Create global constants which can be configured at compile time.
     *
     * Useful for allowing different behaviour between development builds and
     * release builds
     *
     * NODE_ENV should be production so that modules do not perform certain
     * development checks
     */
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      DEBUG_PROD: false,
    }),

    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE === "true" ? "server" : "disabled",
      analyzerPort: 8889,
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(webpackPaths.srcRendererPath, "index.ejs"),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
      isBrowser: false,
      isDevelopment: false,
    }),

    new webpack.DefinePlugin({
      "process.type": '"renderer"',
    }),
  ],
};

export default merge(baseConfig, configuration);
