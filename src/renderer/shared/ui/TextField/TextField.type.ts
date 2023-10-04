import {
  ChangeEventHandler,
  FocusEventHandler,
  ReactElement,
  Ref,
} from "react";

import { FakeButtonProps } from "renderer/shared/ui/FakeButton";

export type TextFieldProps = {
  autoComplete?: string;
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  disabled?: boolean;
  /**
   * an error text to be displayed under input field
   * if value is truthy also changes css styles to display error
   */
  error?: string;
  /**
   * name of the input
   */
  name?: string;
  /**
   * a ref to the input element
   */
  inputRef?: Ref<HTMLInputElement | null | undefined>;
  /**
   * a label text to be displayed above input field,
   * also acts as a label
   */
  label?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onSuffixClick?: FakeButtonProps["onClick"];
  /**
   * text that appears in the form control when it has no value set
   */
  placeholder?: string;
  /**
   * an icon to display on the left side of the input field
   */
  prefix?: ReactElement<SVGSVGElement>;

  /**
   * an icon to display on the right side of the input field
   */
  suffix?: ReactElement<SVGSVGElement>;
  /**
   * type of input
   */
  type?:
    | "email"
    | "file"
    | "hidden"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url";
  value?: ReadonlyArray<string> | number | string | undefined;
};
