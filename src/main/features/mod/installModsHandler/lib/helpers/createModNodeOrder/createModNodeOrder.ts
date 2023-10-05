import { ModInfo } from "main/entities/mod";

const createModNodeOrder = (modInfo: ModInfo) => {
  const template = `
    <node id="Module">
        <attribute id="UUID" value="${modInfo.uuid}" type="FixedString" /> 
        <!-- ${modInfo.name} -->
    </node>`;

  return template;
};

export { createModNodeOrder };
