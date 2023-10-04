const installModsHandler = (filePaths: string[]) => {
  filePaths.forEach((file) => {
    // eslint-disable-next-line no-console
    console.log("Received file", file);
  });
};

export { installModsHandler };
