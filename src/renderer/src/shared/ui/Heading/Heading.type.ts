export type HeadingProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLHeadingElement>) => void;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
