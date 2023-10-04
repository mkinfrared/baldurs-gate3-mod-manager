import { createRef } from "react";

import { mergeRefs } from "./mergeRefs";

describe("mergeRefs", () => {
  it("should be defined", () => {
    expect(mergeRefs).toBeDefined();
  });

  it("should return a function", () => {
    const result = mergeRefs();

    expect(typeof result).toBe("function");
  });

  it("should assign a value to ref object", () => {
    const value = "marklar";
    const refObject = createRef();
    const refCallback = jest.fn();
    const result = mergeRefs(refObject, refCallback, undefined);

    result(value);

    expect(refObject.current).toBe(value);

    expect(refCallback).toHaveBeenCalledWith(value);
  });
});
