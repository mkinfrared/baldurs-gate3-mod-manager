import { AnchorHTMLAttributes } from "react";

import { ButtonProps } from "../Button";

type AnchorAttributes = AnchorHTMLAttributes<HTMLAnchorElement>;

export type LinkButtonProps = AnchorAttributes &
  Pick<ButtonProps, "variant" | "color"> & {
    as?: LinkButtonType;
    /**
     * a string that will be applied as a css class to parent element
     */
    className?: string;
  };

export type LinkButtonType = "button" | "icon";
