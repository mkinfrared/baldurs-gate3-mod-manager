/* eslint-disable no-console,@typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const beforeBuild = () => {
  console.log("before build");
};

exports.default = beforeBuild;
