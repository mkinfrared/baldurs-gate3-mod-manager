import { ImgHTMLAttributes, ReactNode, RefObject } from "react";

export type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  imageRef?: RefObject<HTMLImageElement>;
  children?: ReactNode;
};
