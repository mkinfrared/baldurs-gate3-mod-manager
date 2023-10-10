import { ReactNode } from "react";

export type ContainerProps = {
  children?: ReactNode;
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
};
