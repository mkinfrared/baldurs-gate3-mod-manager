import { BrowserWindow, dialog } from "electron";
import { autoUpdater } from "electron-updater";

import { netConnection } from "@main/shared/lib/helpers";

const checkForUpdates = (win: BrowserWindow) => {
  autoUpdater.autoDownload = false;

  autoUpdater.setFeedURL({
    provider: "github",
    repo: "electron-auto-update",
    owner: "mkorotkov88",
    private: false,
    releaseType: "release",
  });

  autoUpdater.checkForUpdates();

  autoUpdater.addListener("update-available", async () => {
    const userResponse = await dialog.showMessageBox(win, {
      type: "info",
      buttons: ["Update", "Cancel"],
      title: "Update available",
      message: "A new version is available. Do you want to update now?",
      cancelId: 1,
    });

    if (userResponse.response === 0) {
      // The user wants to update
      autoUpdater.downloadUpdate();

      win.setProgressBar(0);
    }
  });

  autoUpdater.on("download-progress", (progressObj) => {
    win.setProgressBar(progressObj.percent / 100);
  });

  autoUpdater.addListener("update-downloaded", () => {
    netConnection.close();

    autoUpdater.quitAndInstall();
  });
};

export { checkForUpdates };
