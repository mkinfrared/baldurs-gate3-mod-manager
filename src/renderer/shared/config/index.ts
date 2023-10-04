import * as secrets from "./config";

Object.entries(secrets).forEach(([key, value]) => {
  if (typeof value === "undefined") {
    throw new Error(`${key} config was not provided`);
  }
});

export * from "./config";
