/* eslint-disable @typescript-eslint/no-var-requires,import/group-exports,no-unsafe-optional-chaining,padding-line-between-statements */
module.exports.readVersion = (contents) => {
  try {
    const packageJson = JSON.parse(contents);

    return packageJson.build.buildVersion;
  } catch (e) {
    console.error(e);
  }
};

module.exports.writeVersion = (contents, version) => {
  const packageJson = JSON.parse(contents);

  packageJson.build.buildVersion = version;

  return JSON.stringify(packageJson);
};
