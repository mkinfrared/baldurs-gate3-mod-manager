import { ModInfo } from "main/entities/mod";

const createModNodeOrder = (modInfo: ModInfo) => {
  const template = `
    <node id="Module">
        <!-- ${modInfo.name} -->
        <attribute id="UUID" value="${modInfo.uuid}" type="FixedString" /> 
    </node>`;

  return template;
};

export { createModNodeOrder };
