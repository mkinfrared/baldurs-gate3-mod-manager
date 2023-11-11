import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type GameNavLinkProps = {
  children?: ReactNode;
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  to: LinkProps["to"];
};
