export type ModFileRowProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  modName?: string;
  modVersion?: string | number | null;
  currentModVersion?: string | number;
  modFilePath: string;
};
