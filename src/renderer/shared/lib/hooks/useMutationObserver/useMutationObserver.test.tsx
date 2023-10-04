import { useMutationObserver } from "./useMutationObserver";

describe("useMutationObserver", () => {
  const hook = useMutationObserver;

  it("should be defined", () => {
    expect(hook).toBeDefined();
  });
});
