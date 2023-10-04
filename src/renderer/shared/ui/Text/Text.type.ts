import { ReactNode } from "react";

export type TextProps = {
  children?: ReactNode;

  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  id?: string;
  size?: "regular" | "small";
};
