import { ModInfo } from "renderer/entities/modFile";

import { getNodeValue } from "../getNodeValue";

const getModInfo = (node: Element) => {
  const folderNode = node.querySelector("#Folder");
  const md5Node = node.querySelector("#MD5");
  const nameNode = node.querySelector("#Name");
  const uuidNode = node.querySelector("#UUID");
  const versionNode = node.querySelector("#Version64");

  const modInfo: ModInfo = {
    folder: getNodeValue(folderNode),
    md5: getNodeValue(md5Node),
    name: getNodeValue(nameNode),
    uuid: getNodeValue(uuidNode),
    version: getNodeValue(versionNode),
  };

  return modInfo;
};

export { getModInfo };
