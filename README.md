# Baldur's Gate 3 Mod Manager macOS

In pursuit of a more personalized and enjoyable gaming experience, many gamers turn towards mods to tailor their experience to their unique preferences. However, for macOS users playing Baldur's Gate 3, managing these mods was a daunting task due to the lack of a suitable mod manager. This inconvenience impelled the creation of the Mod Manager. 

## Features and Usage

**Mod Installation**: The application facilitates easy mod installation. Simply `drag & drop` the zip file into the application window or use a button select files via a dialog window, click `Install`, and you have your mod installed. Just don't forget to click `Activate` to enable your mod. Currently only `zip` formats are supported, `rar` archives will be added later.

**Automatic Mod Activation**: Mods that come without an `info.json` file are automatically activated and require no further action in the application. Simply install them and the game should hook up.

**Mod Support**: The application only supports mods installed in the `Mods` folder and does not support mods that require placement in the game's main directory. For now, only the default `Mods` directory (`Documents/Larian Studios/Baldur's Gate 3/Mods`) is supported.

**Mod Deletion**: The tool gives you the ability to delete previously installed mods entirely from your computer, just make sure you installed the mods using the manager. Mods installed manually are not supported for deletion.

**Mod Deactivation**: It is important to note that removing a mod from the `ModOrder` list will not deactivate the mod and the game will continue to load it. This is an issue in need of further clarification. I will try to check the Larian's release notes on that or give me a hint if you have some knowlegde.

## Issues and Suggestions

If you stumble upon any bugs or have any improvements in mind, please feel free to [an issue](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/new/choose) on GitHub.

## Acknowledgement

Finally, a token of gratitude to the [Larian team](https://larian.com/) for curating such a fantastic gaming journey!
