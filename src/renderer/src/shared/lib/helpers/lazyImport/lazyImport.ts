import { ComponentType, lazy } from "react";

import { delay } from "../delay";

import { LazyFunction } from "./lazyImport.type";

/**
 * a wrapper for React.lazy function with timeout
 * @param lazyFunction - a function that returns an import statement
 * @param timeout - a number in milliseconds to wait for, defaults to 500
 * @returns {LazyFunction}
 * @example
 * // return lazy(() => import("./TestComponent")) after 500ms
 * lazyImport(() => import("./TestComponent"));
 *
 * // return lazy(() => import("./TestComponent")) after 1000ms
 * lazyImport(() => import("./TestComponent"), 1000);
 */
const lazyImport = <T extends ComponentType<unknown>>(
  lazyFunction: LazyFunction<T>,
  timeout = 500,
) => {
  const result = lazy(() =>
    Promise.all([lazyFunction(), delay(timeout)]).then(([imp]) => imp),
  );

  return result;
};

export { lazyImport };
