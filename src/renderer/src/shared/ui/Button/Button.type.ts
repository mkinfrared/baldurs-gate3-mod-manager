import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonAttributes & {
  /**
   * The children prop specifies the child elements or components.
   */
  children?: ReactNode;

  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;

  /**
   * The color of a button.
   */
  color?: ButtonColors;

  /**
   * Represents the loading state of a variable.
   */
  loading?: boolean;

  /**
   * Represents the visual variant of a button.
   */
  variant?: ButtonVariants;
};

export type ButtonColors = "error" | "primary" | "secondary" | "success";

export type ButtonVariants = "contained" | "outlined" | "transparent";
