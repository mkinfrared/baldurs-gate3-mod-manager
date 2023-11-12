import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { ModFileList } from "./ModFileList";

describe("<ModFileList />", () => {
  const acceptedFileTypes = ["zip", "rar"];
  const game = "BG3";
  const onFilesSelect = vi.fn();
  const zipFiles = null;

  const Component = (
    <ModFileList
      acceptedFileTypes={acceptedFileTypes}
      game={game}
      onFilesSelect={onFilesSelect}
      zipFiles={zipFiles}
    />
  );

  it("should be defined", () => {
    expect(ModFileList).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });
});
