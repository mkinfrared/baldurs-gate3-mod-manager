# Baldur's Gate 3 Mod Manager macOS

In pursuit of a more personalized and enjoyable gaming experience, many gamers turn towards mods to tailor their
experience to their unique preferences. However, for macOS users playing Baldur's Gate 3, managing these mods was a
daunting task due to the lack of a suitable mod manager. This inconvenience impelled the creation of the Mod Manager.
You can download it from [here](https://github.com/mkinfrared/baldurs-gate3-mod-manager/releases).

## Installation

Step 1: [Download](https://github.com/mkinfrared/baldurs-gate3-mod-manager/releases/latest) and Install Download the
application.

Step 2: Go to your Applications folder, find the installed app, and try to open it. You'll likely get a security warning
that the app can't be opened because it is from an unidentified developer (I am not enrolled in Apple Developer
Program).

Step 3: Use the following steps to bypass this security warning:

1. Open System Preferences
2. Click on Security & Privacy
3. At the bottom of the window, you will see a message "baldurs-gate3-mod-manager- was blocked from opening because it
   is not from an identified developer." Click on Open Anyway.

Step 4: Open the Application

## Features and Usage

**Mod Installation**: The application streamlines the process of mod installation. You can just drag & drop the zip,
rar, or 7z files directly into the application's interface, or you can utilize a button to select files through a dialog
window. After that, just hit Install and your mod will be installed.

**Mod Activation**: The application includes a button that allows you to activate or deactivate the mod. However, keep
in
mind that not all mods come with meta info (the `pak` file may not come with a `meta.lsx` file). Usually, this implies
that
the mod does not require activation (there is no need to update `modsettings.lsx`).

**Mod Order**: In the `Mod Order` list, you can easily change the order of mods by simply dragging them.

**Mod Support**: The application only supports mods installed in the `Mods` folder and does not support mods that
require placement in the game's main directory.

**Mod Deletion**: The tool gives you the ability to delete previously installed mods entirely from your computer.

## Troubleshoot

#### Enable/Disable Button is not working

If your `modsettings.lsx` is not working correctly, it may be due to it being empty or having an invalid XML structure. To
resolve this issue, you can navigate to the `Backup` section and click on the `Restore Default Settings` button. This action
will overwrite the current `modsettings.lsx` with its default content typically seen after the game's first launch.

## Issues and Suggestions

If you stumble upon any bugs or have any improvements in mind, please feel free
to [an issue](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/new/choose) on GitHub.

## Acknowledgement

Finally, a token of gratitude to the [Larian team](https://larian.com/) for curating such a fantastic gaming journey!
