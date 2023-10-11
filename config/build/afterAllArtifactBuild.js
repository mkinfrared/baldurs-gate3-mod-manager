/* eslint-disable @typescript-eslint/no-var-requires,no-console */
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

const afterAllArtifactBuild = (context) => {
  console.log("after all artifact build");
};

exports.default = afterAllArtifactBuild;
