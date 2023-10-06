const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const changelogFileName = "CHANGELOG.md";
const releaseFileName = "RELEASE.txt";

const rootPath = path.resolve(__dirname, "../..");
const changeLogPath = path.join(rootPath, changelogFileName);
const releaseChangesPath = path.join(rootPath, releaseFileName);
const text = readFileSync(changeLogPath).toString("utf8");

const getChanges = (input) => {
  const regex = /^#{2}\s.+[\s\S]+?(?=^#{2}\s)/dgm;

  const match = regex.exec(input);

  return match[0];
};

const changes = getChanges(text);

writeFileSync(releaseChangesPath, changes);

console.log(changes);
