import { Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary";

import { SuspenseErrorProps } from "./SuspenseError.type";

const SuspenseError = ({ children, loadingFallback }: SuspenseErrorProps) => (
  <ErrorBoundary>
    <Suspense fallback={loadingFallback}>{children}</Suspense>
  </ErrorBoundary>
);

export default SuspenseError;
