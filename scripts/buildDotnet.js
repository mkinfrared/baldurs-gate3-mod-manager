/* eslint-disable padding-line-between-statements,@typescript-eslint/no-var-requires */

const path = require("path");
const { spawnSync } = require("child_process");

const archs = ["arm64", "x64"];
const projectPath = path.resolve(__dirname, "../PakReader");
const getPublishDir = (arch) =>
  path.resolve(__dirname, "../PakReader/out", arch);

// Generate the command process

for (const arch of archs) {
  const dotnetPublish = spawnSync("dotnet", [
    "publish",
    projectPath,
    "-o",
    getPublishDir(arch),
    "--runtime",
    `osx-${arch}`,
  ]);

  console.log(`stdout: ${dotnetPublish.stdout.toString()}`);
  if (dotnetPublish.stderr) {
    console.error(`stderr: ${dotnetPublish.stderr.toString()}`);
  }

  if (dotnetPublish.status !== 0) {
    process.exit(dotnetPublish.status);
  }
}
