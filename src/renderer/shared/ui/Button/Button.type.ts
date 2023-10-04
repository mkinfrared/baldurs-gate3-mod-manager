import { ButtonHTMLAttributes, ReactNode, Ref } from "react";

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonOwnProps = {
  buttonRef?: Ref<HTMLButtonElement>;
  children?: ReactNode;
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  color?: ButtonColors;
  /*
    variant to use
   */
  variant?: ButtonVariants;
};

export type ButtonProps = ButtonAttributes & ButtonOwnProps;

export type ButtonColors = "error" | "primary" | "secondary" | "success";

export type ButtonVariants = "contained" | "transparent";
