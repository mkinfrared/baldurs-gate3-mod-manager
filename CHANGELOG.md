# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## 1.4.4 (2023-11-09)


### Bug Fixes

* version and version type are empty ([#115](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/115)) ([d24ef53](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/d24ef537ce1281adf1f0bec445681814ba644f48))


## 1.4.3 (2023-11-06)


### Bug Fixes

* Resolve the issue of an empty white/black screen. The application will now display an error message, aiding you in diagnosing and rectifying the problem. ([#108](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/108)) ([dee6ebd](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/dee6ebde59503162a58c4c3852f1629595961ccb))


## 1.4.2 (2023-11-03)


### Bug Fixes

* Fix incorrect repository for auto update ([#100](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/100)) ([27d52cf](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/27d52cf205318867b0696359ba53a03e52af533e))

## 1.4.1 (2023-11-03)


### Bug Fixes

* Fix missing children nodes. Some `modsettings.lsx` were missing children node in `#ModOrder` which prevented the app to update the data. ([#96](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/96)) ([e80870e](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/e80870efa36cd439f1e0485ddde0bd23c0bcf8d6)), closes [#77](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/77)

## 1.4.0 (2023-11-02)


### Features

* Add support of `.pak` files. From this release the app will retrieve information from `meta.lsx` inside `pak` file ([#81](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/81)) ([701d6be](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/701d6be236f055cddaf6ff9fde1137738a4670d2))
* Add auto update. After installing this version you will receive notifications about new updates. New updates will automatically install after prompt, it will also remove the burden of going through the Apple complains about unidentified developer  ([#78](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/78)) ([7827892](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/78278928efccbacffcb94ddf78b2cedb5d72b5b1))
* Add active/deactivate mod. Return activate/deactivate button, it can now fully deactivate mod by removing it from `modsettings.lsx`. Please note that the `pak` file of the mod won't be deleted from the system, upon activation the mod meta will be retrieved from that file ([#84](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/84)) ([0cf8de3](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/0cf8de35008368e554e92d5b6c2f0473fc471ee2))
* Add current app version display ([#79](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/79)) ([b4dd41b](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/b4dd41ba446f74272c0377ef3a319a568b042cbb))

## 1.3.0 (2023-10-11)


### Features

* Add `rar` and `7z` support, you can now install mods by adding these archives to the list ([#39](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/39)) ([5e82fe1](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/5e82fe10e1bca652353b08253aa9ddb8e420b2cd))
* Add `Clear` button to empty list of `Modification Files` ([#56](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/56)) ([3dee89a](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/3dee89a7703cdf8e793d657e84aa9477903795d2))

## 1.2.2 (2023-10-09)

### Features

- Revert support for `.rar` and `.7z` files as libarchive is not working in production build. Further investigations are in plain.
- Remove activate button, as it only confused people including me. Initially as I thought adding mod to `ModOrder` meant
  activating that mod and removing was deactivating. As it turned out it doesn't work that way, it only determines the
  load order of the mods. So from now all the mods you install and if they have a proper `info.json` will be added
  to `ModOrder`. ([#34](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/34)) ([e0e5cb9](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/e0e5cb94c7dc316bf6d294923fb2942dc1e3438b))

### Bug Fixes

- Some mods (like [this](https://www.nexusmods.com/baldursgate3/mods/243?tab=posts&BH=1)) have different `info.json`
  structure so only `.pak` file was installed without updating `modsettings.lsx`, this commit addresses this issue. If
  you find more mods that fail to install due to a different `info.json` values, please open an issue, I will try to add
  support for
  them. ([#38](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/38)) ([9c28c4b](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/9c28c4b5b9c10a25a9e5c3a37a5795e6be44d199))
- There was incorrect behavior on reinstalling the same mod, causing the mod to duplicate inside Installed Mods
  list. ([#37](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/37)) ([64ae9ab](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/64ae9abfa9d7c4fe99bd29b274475b7cf537e792))
- Fix mod row
  styles ([#35](https://github.com/mkinfrared/baldurs-gate3-mod-manager/issues/35)) ([7ec2c5b](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/7ec2c5bebbd40b91a0b518c5ae8f953430e2b3db))

## 1.1.0 (2023-10-07)

### Features

- Add mod ordering option. You can now drag mods inside `Mod Order` to change their
  order. ([ece7847](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/ece78470693fb33453077f9b689f8ddb10e6dd4f))

## 1.0.3 (2023-10-07)

### Bug Fixes

- Remove excessive dmg sign, to avoid extra macOS warnings on unsafe
  application ([76520d8](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/76520d8bbfdae1e87e3a18bccbfb2d1dd7adc443))

## 1.0.2 (2023-10-07)

### Bug Fixes

- '“Baldur's Gate 3 Mod Manager” is damaged and can’t be opened. You should move it to the Trash' by adding code
  signature ([afbbf33](https://github.com/mkinfrared/baldurs-gate3-mod-manager/commit/afbbf3374bebff05cd6d293a5cbfed2165717673))

## 1.0.0 (2023-10-06)

### Initial Release

- Check the description at [repository page](https://github.com/mkinfrared/baldurs-gate3-mod-manager)
