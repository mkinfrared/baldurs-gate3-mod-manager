import path from "path";

const src = path.resolve(__dirname, "../../../../../");
const main = path.join(src, "main");
const renderer = path.join(src, "renderer");

const appPaths = {
  src,
  main,
  renderer,
};

export { appPaths };
