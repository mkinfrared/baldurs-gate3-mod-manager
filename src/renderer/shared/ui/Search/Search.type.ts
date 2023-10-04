import { ReactElement, ReactNode } from "react";

export type SearchProps<T> = {
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
   * determines whether the options will be filtered
   * on input type change
   */
  filterable?: boolean;
  /**
   * a function to get a selected option
   */
  getActiveOption: (option: T) => boolean;
  /**
   * a function to get a displayed label for option
   */
  getOptionLabel: (option?: T) => ReactNode;
  isLoading?: boolean;
  /**
   * name of the input
   */
  name?: string;
  /**
   * a label text to be displayed above input field,
   * also acts as a label
   */
  label?: string;
  /**
   * a string which will be displayed if options array is empty
   * defaults to No Options
   */
  noOptionLabel?: string;
  /**
   * a callback which is fired upon option selection
   */
  onChange: (option?: T) => void;
  /**
   * a callback which is fired upon input change
   */
  onSearch: (value?: string) => void;
  /**
   * an array of elements to represent option values
   */
  options: T[];
  /**
   * text that appears in the form control when it has no value set
   */
  placeholder?: string;
  /**
   * an icon to display on the left side of the input field
   */
  prefix?: ReactElement<SVGSVGElement>;
  /**
   * an input value
   */
  searchValue: string | undefined;
  /**
   * an icon to display on the right side of the input field
   * if isLoading props is true a spinner is displayed instead of suffix
   * defaults to an icon search
   */
  suffix?: ReactElement<SVGSVGElement>;
  /**
   * selected value
   */
  value?: T;
};

// For storybook exapmle only

export type Character = {
  id: number;
  name: string;
  image: string;
};

export type ServerResponse = {
  results: Character[];
};
