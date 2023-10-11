/* eslint-disable no-underscore-dangle */
// import { render, waitFor } from "@testing-library/react";
// import { Suspense } from "react";

import { lazyImport } from "./lazyImport";

describe("lazyImport", () => {
  it("should be defined", () => {
    expect(lazyImport).toBeDefined();
  });

  /*
   * this test is not working in vitest
   */
  // it("should return TestComponent", async () => {
  //   const Result = lazyImport(() => import("./__mocks__/TestComponent"));
  //
  //   expect(Result).toBeDefined();
  //
  //   expect(typeof Result.$$typeof).toBe("symbol");
  //
  //   await waitFor(() => {
  //     const { getByTestId,  } = render(
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <Result />
  //       </Suspense>,
  //     );
  //
  //     expect(getByTestId("TestComponent")).toBeDefined();
  //   });
  // });
});
