export type CheckboxProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  error?: boolean;
  name?: string;
  inputRef?: React.Ref<HTMLInputElement | null | undefined>;
  /**
   * label text to render next to checkbox
   */
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  value?: string;
};
