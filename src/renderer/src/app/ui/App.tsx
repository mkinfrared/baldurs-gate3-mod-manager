import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { MemoryRouter as Router } from "react-router-dom";

import { AppRoutes } from "@renderer/routes";
import ErrorBoundary from "@renderer/shared/components/ErrorBoundary";
import { trpc, trpcClient } from "@renderer/shared/lib/helpers";
import { useTheme } from "@renderer/shared/lib/hooks";
import { AppNavBar, GameNavBar } from "@renderer/widgets";

import css from "./App.module.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 3,
      retryDelay: 1000,
      cacheTime: 0,
      staleTime: 0,
    },
  },
});

/**
 * https://trpc.io/docs/v9/react
 * https://github.com/awohletz/electron-prisma-trpc-example/blob/main/src/client/renderer.ts
 */

const App = () => {
  useTheme("app-theme");

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
                <GameNavBar className={css.gameNavBar} />
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
