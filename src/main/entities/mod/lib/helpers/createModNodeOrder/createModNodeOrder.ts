import { ModInfo } from "../getModInfo";

const createModNodeOrder = (mod: ModInfo) => {
  const template = `
    <node id="Module">
        <!--  ${mod.name ?? mod.fileName}  -->
        <attribute id="UUID" value="${mod.uuid}" type="FixedString" /> 
    </node>
    `;

  return template;
};

export { createModNodeOrder };
