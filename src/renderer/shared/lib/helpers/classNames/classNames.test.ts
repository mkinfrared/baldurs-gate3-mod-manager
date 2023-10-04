/* eslint-disable no-magic-numbers */
import { classNames } from "./classNames";

describe("classNames", () => {
  it("should be defined", () => {
    expect(classNames).toBeDefined();
  });

  it("should return filter out falsy argument values and return a string of truthy values", () => {
    const classes = [
      undefined && "bar",
      "foo",
      0 && "marklar",
      false && "bar",
      1 && "bar",
    ];

    const result = classNames(...classes);

    expect(result).toBe("foo bar");
  });
});
