/* eslint-disable @typescript-eslint/no-var-requires,no-console */
const fs = require("fs");
const path = require("path");

const afterSign = () => {
  console.log("after sign");
};

exports.default = afterSign;
