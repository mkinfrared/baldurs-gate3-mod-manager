import { ReactNode, RefObject } from "react";

export type MenuProps = {
  children?: ReactNode;
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  /**
   * a ref to an element that combobox will attach to during render
   */
  comboboxRef: RefObject<HTMLElement>;
  /**
   * a unique id to use in conjunction with aria-controls
   */
  id: string;
  /**
   * a callback which fires on outside click of Menu
   * to close the current Modal component
   */
  onClose: () => void;
};
