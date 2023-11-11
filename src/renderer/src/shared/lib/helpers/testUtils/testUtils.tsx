/* eslint-disable import/no-unused-modules */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ReactElement, ReactNode } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import { trpc, trpcClient } from "@renderer/shared/lib/helpers/trpc";

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

const withRouter = (children: ReactNode) => (
  <MemoryRouter>{children}</MemoryRouter>
);

export { renderWithRouter, withQueryProvider, withRouter };
