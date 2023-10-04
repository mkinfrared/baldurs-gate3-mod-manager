// import { writeBinaryFile } from "@tauri-apps/api/fs";
// import { join } from "@tauri-apps/api/path";
// import JSZip from "jszip";
//
// import { BG3_SETTINGS_DIR } from "renderer/shared/config";
// import { fileExtension } from "renderer/shared/lib/helpers";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const extractPakFile = async (zipFile: File) => {
  // TODO refactor to node js
  // const modsFolder = await join(BG3_SETTINGS_DIR, "Mods");
  // const zip = new JSZip();
  // const zipData = await zip.loadAsync(zipFile);
  // const pakFiles = zipData.filter((_, file) => fileExtension.isPak(file.name));
  //
  // const results = pakFiles.map(async (pak) => {
  //   const buffer = await pak.async("arraybuffer");
  //   const fullPathName = await join(modsFolder, pak.name);
  //
  //   return writeBinaryFile(fullPathName, buffer, { append: false });
  // });
  //
  // return Promise.all(results);
};

export { extractPakFile };
