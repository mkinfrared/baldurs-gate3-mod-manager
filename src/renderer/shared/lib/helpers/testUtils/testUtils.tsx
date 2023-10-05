/* eslint-disable import/no-unused-modules */
import { userEvent } from "@storybook/testing-library";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

import { trpc, trpcClient } from "renderer/shared/lib/helpers/trpc";

// https://testing-library.com/docs/example-react-router/
const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

const queryClient = new QueryClient();

const withQueryProvider = (children: ReactNode) => (
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </trpc.Provider>
);

export { renderWithRouter, withQueryProvider };
