/* eslint-disable import/no-unused-modules */
import { userEvent } from "@storybook/testing-library";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import { WithTrpcProviderArgs } from "renderer/shared/lib/helpers/testUtils/testUtils.type";

// https://testing-library.com/docs/example-react-router/
const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

const queryClient = new QueryClient();

const withQueryProvider = ({ children }: WithTrpcProviderArgs) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export { renderWithRouter, withQueryProvider };
