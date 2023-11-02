import { ModInfo } from "@main/entities/mod";

const createModNode = (modInfo: ModInfo) => {
  const {
    folder = "",
    version = "",
    md5 = "",
    name = "",
    uuid = "",
    versionType = "",
  } = modInfo;

  const template = `
    <node id="ModuleShortDesc">
      <attribute id="Folder" type="LSString" value="${folder}" />
      <attribute id="MD5" type="LSString" value="${md5}" />
      <attribute id="Name" type="LSString" value="${name}" />
      <attribute id="UUID" type="FixedString" value="${uuid}" />
      <attribute id="Version64" type="${versionType}" value="${version}" />
    </node>
`;

  return template;
};

export { createModNode };
