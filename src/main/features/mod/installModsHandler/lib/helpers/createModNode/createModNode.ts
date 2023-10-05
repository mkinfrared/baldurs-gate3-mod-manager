import { ModInfo } from "main/entities/mod";

const getVersion = (value: number | string | null) => {
  const version = value === null ? 0 : +value;

  if (version === 0) {
    return { version: "", type: "int64" };
  }

  if (Number.isInteger(version)) {
    return { version, type: "int64" };
  }

  if (version === parseFloat(version.toString())) {
    return { version, type: "float32" };
  }

  return { version: "", type: "int64" };
};

const createModNode = (modInfo: ModInfo) => {
  const { version, type } = getVersion(modInfo.version);

  const template = `
    <node id="ModuleShortDesc">
      <!-- ${modInfo.uuid} -->
      <attribute id="Folder" type="LSString" value="${modInfo.folder}" />
      <attribute id="MD5" type="LSString" value="${modInfo.md5}" />
      <attribute id="Name" type="LSString" value="${modInfo.name}" />
      <attribute id="UUID" type="FixedString" value="${modInfo.uuid}" />
      <attribute id="Version64" type="${type}" value="${version}" />
    </node>
`;

  return template;
};

export { createModNode };
