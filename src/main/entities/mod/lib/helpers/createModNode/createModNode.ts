import { ModInfo } from "../getModInfo";

const createModNode = (mod: ModInfo) => {
  const {
    folder = "",
    version = "",
    md5 = "",
    name = "",
    uuid = "",
    versionType = "",
  } = mod;

  const template = `
    <node id="ModuleShortDesc">
      <!--  ${name}  -->
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
