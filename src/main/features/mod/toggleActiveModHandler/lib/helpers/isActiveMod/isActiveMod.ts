import { getCurrentSettings } from "@main/entities/modSettingsFile";

const isActiveMod = async (modUUID: string) => {
  const settings = await getCurrentSettings();
  const attribute = settings(`#ModOrder children [value="${modUUID}"]`);

  return !!attribute.length;
};

export { isActiveMod };
