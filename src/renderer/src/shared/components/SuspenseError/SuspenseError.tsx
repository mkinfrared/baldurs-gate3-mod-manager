import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary";

import { SuspenseErrorProps } from "./SuspenseError.type";

const SuspenseError = ({ children, loadingFallback }: SuspenseErrorProps) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary reset={reset}>
        <Suspense fallback={loadingFallback}>{children}</Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

export default SuspenseError;
