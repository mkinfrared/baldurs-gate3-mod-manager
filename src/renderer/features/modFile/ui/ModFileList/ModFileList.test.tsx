import { render } from "@testing-library/react";

import { withQueryProvider } from "renderer/shared/lib/helpers/testUtils";
import { trpc } from "renderer/shared/lib/helpers/trpc";

import { ModFileList } from "./ModFileList";

jest.mock("renderer/shared/lib/helpers/trpc", () => ({
  trpc: {
    mod: {
      readMods: {
        useMutation: jest.fn(),
      },
    },
  },
}));

describe("<ModFileList />", () => {
  const readModsMock = {
    mutateAsync: jest.fn().mockResolvedValue([]),
    isLoading: false,
  };

  const trpcMock = trpc as jest.MockedObjectDeep<typeof trpc>;

  beforeEach(() => {
    jest.clearAllMocks();

    trpcMock.mod.readMods.useMutation = jest.fn();

    trpcMock.mod.readMods.useMutation.mockImplementation(
      () => readModsMock as any,
    );
  });

  const Component = <ModFileList />;

  it("should be defined", () => {
    expect(ModFileList).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component, { wrapper: withQueryProvider });

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("ModFileList");

    expect(element).toBeDefined();
  });
});
