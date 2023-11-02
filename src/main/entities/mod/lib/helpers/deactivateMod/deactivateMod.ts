import {
  getCurrentSettings,
  saveModSettings,
} from "@main/entities/modSettingsFile";

const deactivateMod = async (modUUID: string) => {
  const settings = await getCurrentSettings();
  const modOrderAttribute = settings(`#ModOrder children [value="${modUUID}"]`);
  const modListAttribute = settings(`#Mods children [value="${modUUID}"]`);

  modOrderAttribute.parent().remove();

  modListAttribute.parent().remove();

  await saveModSettings(settings.xml());
};

export { deactivateMod };
