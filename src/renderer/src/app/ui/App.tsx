import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { MemoryRouter as Router } from "react-router-dom";

import { AppRoutes } from "@renderer/routes";
import ErrorBoundary from "@renderer/shared/components/ErrorBoundary";
import { trpc, trpcClient } from "@renderer/shared/lib/helpers";
import { Heading } from "@renderer/shared/ui";
import { AppNavBar } from "@renderer/widgets/ui";

import css from "./App.module.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

/**
 * https://trpc.io/docs/v9/react
 * https://github.com/awohletz/electron-prisma-trpc-example/blob/main/src/client/renderer.ts
 */

const App = () => {
  useEffect(() => {
    document.title = `Baldur's Gate 3 Mod Manager v${APP_VERSION}`;
  }, []);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ErrorBoundary>
            <div className={css.App} data-testid="App">
              <aside>
                <AppNavBar className={css.navBar} />
              </aside>
              <main>
                <div className={css.version}>
                  <Heading variant="h4">{APP_VERSION}</Heading>
                </div>
                <AppRoutes />
              </main>
            </div>
          </ErrorBoundary>
        </Router>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export { App };
