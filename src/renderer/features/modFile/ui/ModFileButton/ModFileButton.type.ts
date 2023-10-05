export type ModFileButtonProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  modPath: string;
  currentModVersion: string | number | undefined;
  modVersion: string | number | null | undefined;
};
