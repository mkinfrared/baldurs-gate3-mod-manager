const createModNodeOrder = (modUUID: string) => {
  const template = `
    <node id="Module">
        <attribute id="UUID" value="${modUUID}" type="FixedString" /> 
    </node>
    `;

  return template;
};

export { createModNodeOrder };
