import { MouseEventHandler, ReactNode } from "react";

export type ToggleButtonProps = {
  active?: boolean;
  children?: ReactNode;
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
