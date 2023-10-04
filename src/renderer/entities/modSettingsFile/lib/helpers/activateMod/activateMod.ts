// import xmlPlugin from "@prettier/plugin-xml";
// import { getCurrentSettings } from "renderer/entities/modSettingsFile/lib/helpers/getCurrentSettings";
// import prettier from "prettier/standalone";

/**
 * <node id="Module">
 *     <attribute id="UUID" value="da0b99ca-4406-49c1-bef9-3a08621280a2" type="FixedString"/> <!-- Tav's Hairpack -->
 * </node>
 * @param modUUID
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const activateMod = async (modUUID: string, modName: string) => {
  // TODO: Node
  // TODO: use Node JS
  // TODO: refactor to NodeJS
  // const regex = /<parsererror[\s\S]+parsererror>/;
  // const saveRegex = /<save>/;
  // const settings = await getCurrentSettings();
  // const fileContents = await readTextFile(settings.path);
  // const xml = new DOMParser().parseFromString(fileContents, "text/xml");
  // const modOrder = xml.querySelector("#ModOrder children");
  // const node = xml.createElement("node");
  // const attribute = xml.createElement("attribute");
  // const comment = xml.createComment(modName);
  //
  // node.setAttribute("id", "Module");
  //
  // attribute.setAttribute("id", "UUID");
  //
  // attribute.setAttribute("value", modUUID);
  //
  // attribute.setAttribute("type", "FixedString");
  //
  // node.appendChild(comment);
  //
  // node.appendChild(attribute);
  //
  // modOrder?.appendChild(node);
  //
  // const newContent = new XMLSerializer()
  //   .serializeToString(xml)
  //   .replace(regex, "")
  //   .replace(saveRegex, "\n<save>");
  //
  // // eslint-disable-next-line no-console
  // console.log(newContent);
  //
  // const formattedString = await prettier.format(newContent, {
  //   parser: "xml",
  //   plugins: [xmlPlugin],
  //   printWidth: 160,
  // });
  //
  // // eslint-disable-next-line no-console
  // console.log(formattedString);
  //
  // await writeTextFile(settings.path, formattedString, { append: false });
};

export { activateMod };
