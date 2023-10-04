const isJson = (fileName: string) => {
  const regex = /\.json$/i;

  return regex.test(fileName);
};

const isZip = (fileName: string) => {
  const regex = /\.zip$/i;

  return regex.test(fileName);
};

const isPak = (fileName: string) => {
  const regex = /\.pak$/i;

  return regex.test(fileName);
};

const isLsx = (fileName: string) => {
  const regex = /\.lsx$/i;

  return regex.test(fileName);
};

export { isJson, isZip, isPak, isLsx };
