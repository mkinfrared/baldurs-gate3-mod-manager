import { Game } from "@renderer/shared/types";

export type SettingsFormProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  game: Game;
};

export type SettingsFormValues = {
  modSettingsFile: string;
  modsDirectory: string;
};
