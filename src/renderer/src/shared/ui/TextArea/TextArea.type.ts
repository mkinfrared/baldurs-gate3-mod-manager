import {
  ChangeEventHandler,
  FocusEventHandler,
  Ref,
  TextareaHTMLAttributes,
} from "react";

type TextAreaAttributes = Omit<
  TextareaHTMLAttributes<HTMLInputElement>,
  "prefix"
>;

export type TextAreaProps = Omit<TextAreaAttributes, "placeholder"> & {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  /**
   * an error text to be displayed under input field
   * if value is truthy also changes css styles to display error
   */
  error?: string;
  /**
   * a label text to be displayed above input field,
   * also acts as a label
   */
  label?: string;
  /**
   * a value of maximum number of characters to be
   * displayed above the textarea as counter going
   * down on each key press
   */
  maxCharValue?: number;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  /**
   * a ref to the textarea element
   */
  textAreaRef?: Ref<HTMLTextAreaElement>;
  /**
   * text that appears in the form control when it has no value set
   */
  placeholder?: string;
  value?: string;
};
