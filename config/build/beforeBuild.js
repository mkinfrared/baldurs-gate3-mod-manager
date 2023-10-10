/* eslint-disable no-console,@typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const beforeBuild = () => {
  console.log("before build")
  const buildDir = path.resolve(__dirname, "../../dist");

  fs.rmSync(buildDir);
};

exports.default = beforeBuild;
