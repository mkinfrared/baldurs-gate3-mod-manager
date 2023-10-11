import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { EmptyList } from "./EmptyList";

describe("<EmptyList />", () => {
  const onFileSelect = vi.fn();
  const acceptedFileTypes = ["zip", "rar"];

  const Component = (
    <EmptyList
      acceptedFileTypes={acceptedFileTypes}
      onFilesSelect={onFileSelect}
    />
  );

  it("should be defined", () => {
    expect(EmptyList).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
