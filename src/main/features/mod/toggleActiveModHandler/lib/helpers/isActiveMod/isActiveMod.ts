import { getCurrentSettings } from "@main/entities/modSettingsFile";
import { GameKey } from "@main/shared/config";

const isActiveMod = async (modUUID: string, key: GameKey) => {
  const settings = await getCurrentSettings(key);
  const attribute = settings(`#ModOrder children [value="${modUUID}"]`);

  return !!attribute.length;
};

export { isActiveMod };
