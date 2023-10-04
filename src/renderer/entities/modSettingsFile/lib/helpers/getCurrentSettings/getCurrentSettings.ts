// import { BG3_SETTINGS_DIR } from "renderer/shared/config";

const getCurrentSettings = async () => {
  // TODO refactor to node js
  //                 modsettings.lsx
  // const fileName = /^modsettings\.lsx$/;
  //
  // const publicProfilePath = await join(
  //   BG3_SETTINGS_DIR,
  //   "/PlayerProfiles/Public",
  // );
  //
  // console.log(publicProfilePath);
  //
  // const dirContents = await readDir(publicProfilePath, {
  //   dir: BaseDirectory.Home,
  //   recursive: true,
  // });
  //
  // for (const entry of dirContents) {
  //   if (fileName.test(entry.name ?? "")) {
  //     return entry;
  //   }
  // }
  //
  // throw new Error(
  //   `${fileName} was not found. Make sure it exists or that you specified a correct path to Baldur's Gate 3 settings directory`,
  // );
};

export { getCurrentSettings };
