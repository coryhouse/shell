const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const deps = require("./package.json").dependencies;
require("dotenv").config({ path: "./.env" });
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const buildDate = new Date().toLocaleString();

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.ts",
    mode: process.env.NODE_ENV || "development",
    output: {
      // Required for the historyApiFallback setting to work per https://ui.dev/react-router-cannot-get-url-refresh#webpack--development
      publicPath: "/",
    },
    devServer: {
      port: 3000,
      open: true,
      // Redirect all requests to index.html so client-side routing works
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions" } },
              ],
              "@babel/preset-typescript",
              ["@babel/preset-react", { runtime: "automatic" }], // Automatic necessary so we can omit React imports per https://stackoverflow.com/a/64994595/26180
            ],
            plugins: [
              "react-hot-loader/babel",
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              [
                "@babel/plugin-proposal-private-property-in-object",
                { loose: true },
              ],
              ["@babel/plugin-proposal-private-methods", { loose: true }],
            ],
          },
        },
      ],
    },

    plugins: [
      new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      ...(process.env.ANALYZE === "Y" ? [new BundleAnalyzerPlugin()] : []),
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          // TODO: Fetch this info from the shell DB.
          remote1: isProduction
            ? "remote1@https://spotted-list.surge.sh/remoteEntry.js"
            : "remote1@http://localhost:3001/remoteEntry.js",
          remote2: isProduction
            ? "remote2@https://grey-whip.surge.sh/remoteEntry.js"
            : "remote2@http://localhost:3002/remoteEntry.js",
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-dom"],
          },
          "react-router-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-router-dom"],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
  };
};
