/* eslint-disable no-bitwise */
const getConventionalVersion = (version?: string) => {
  const regex = /^\d+$/;

  if (!version || !regex.test(version)) {
    return version;
  }

  const versionInt = BigInt(version);
  const major = versionInt >> BigInt(55);
  const minor = (versionInt >> BigInt(47)) & BigInt(0xff);
  const revision = (versionInt >> BigInt(31)) & BigInt(0xffff);
  const build = versionInt & BigInt(0x7fffffff);

  return `${major.toString()}.${minor.toString()}.${revision.toString()}.${build.toString()}`;
};

export { getConventionalVersion };
