import { ReactNode } from "react";

export type MenuItemProps<T> = {
  children?: ReactNode;
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  isSelected?: boolean;
  onClick?: (value?: T) => void;
  onFocus?: (value?: T) => void;
  value?: T;
};
