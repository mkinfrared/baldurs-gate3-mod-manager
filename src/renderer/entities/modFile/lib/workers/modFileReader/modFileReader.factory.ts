const modFileReaderFactory = () =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  new Worker(new URL("./modFileReader.worker", import.meta.url), {
    type: "module",
  });

export { modFileReaderFactory };
