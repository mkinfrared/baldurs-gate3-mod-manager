import { ReactNode } from "react";

export type SuspenseErrorProps = {
  children?: ReactNode;
  loadingFallback?: ReactNode;
};
