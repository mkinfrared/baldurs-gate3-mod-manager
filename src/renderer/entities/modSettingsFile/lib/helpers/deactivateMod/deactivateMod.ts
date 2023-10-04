// import { readTextFile, writeTextFile } from "@tauri-apps/api/fs";
//
// import { getCurrentSettings } from "../getCurrentSettings";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const deactivateMod = async (modUUID: string) => {
  // TODO: NODEJS
  // const regex = /<parsererror[\s\S]+parsererror>/;
  // const saveRegex = /<save>/;
  // const settings = await getCurrentSettings();
  // const fileContents = await readTextFile(settings.path);
  // const xml = new DOMParser().parseFromString(fileContents, "text/xml");
  // const nodes = xml.querySelectorAll("#ModOrder node");
  //
  // nodes.forEach((node) => {
  //   const value = node.children[0]?.getAttribute("value");
  //
  //   if (value === modUUID) {
  //     node.remove();
  //   }
  // });
  //
  // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // // @ts-ignore
  // const newContent = new XMLSerializer()
  //   .serializeToString(xml)
  //   .replace(regex, "")
  //   .replace(saveRegex, "\n<save>");
  // await writeTextFile(settings.path, newContent, { append: false });
};

export { deactivateMod };
