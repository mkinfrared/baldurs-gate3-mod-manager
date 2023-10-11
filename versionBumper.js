/* eslint-disable @typescript-eslint/no-var-requires,import/group-exports,no-unsafe-optional-chaining,padding-line-between-statements */
module.exports.readVersion = (contents) => {
  try {
    const config = JSON.parse(contents);

    return config.buildVersion;
  } catch (e) {
    console.error(e);
  }
};

module.exports.writeVersion = (contents, version) => {
  const config = JSON.parse(contents);

  config.buildVersion = version;

  return JSON.stringify(config);
};
