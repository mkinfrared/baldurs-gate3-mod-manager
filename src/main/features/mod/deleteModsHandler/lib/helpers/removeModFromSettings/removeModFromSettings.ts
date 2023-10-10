import {
  getCurrentSettings,
  saveModSettings,
} from "@main/entities/modSettingsFile";

const removeModFromSettings = async (modUUID: string) => {
  const settings = await getCurrentSettings();
  const attribute = settings(`#Mods children [value="${modUUID}"]`);

  attribute.parent().remove();

  await saveModSettings(settings.xml());
};

export { removeModFromSettings };
