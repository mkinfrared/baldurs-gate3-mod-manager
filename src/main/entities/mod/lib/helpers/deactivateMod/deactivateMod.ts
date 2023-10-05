import {
  getCurrentSettings,
  saveModSettings,
} from "main/entities/modSettingsFile";

const deactivateMod = async (modUUID: string) => {
  const settings = await getCurrentSettings();
  const attribute = settings(`#ModOrder children [value="${modUUID}"]`);

  attribute.parent().remove();

  await saveModSettings(settings.xml());
};

export { deactivateMod };
