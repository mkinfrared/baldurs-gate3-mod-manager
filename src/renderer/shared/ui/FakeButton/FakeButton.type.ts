import { MouseEvent, ReactNode } from "react";

export type FakeButtonProps = {
  ariaLabel?: string;
  ariaLabelledby?: string;
  autoFocus?: boolean;
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
};
