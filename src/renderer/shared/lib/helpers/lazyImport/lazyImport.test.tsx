/* eslint-disable no-underscore-dangle */
import { render, waitFor } from "@testing-library/react";
import { Suspense } from "react";

import { lazyImport } from "./lazyImport";

describe("lazyImport", () => {
  it("should be defined", () => {
    expect(lazyImport).toBeDefined();
  });

  it("should return TestComponent", () => {
    const Result = lazyImport(() => import("./__mocks__/TestComponent"));

    expect(Result).toBeDefined();

    expect(typeof Result.$$typeof).toBe("symbol");

    waitFor(() => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <Result />
        </Suspense>,
      );

      expect("Test Component").toBeInTheDocument();
    });
  });
});
