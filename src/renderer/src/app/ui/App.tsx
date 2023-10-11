import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter as Router } from "react-router-dom";

import { AppRoutes } from "@renderer/routes";
import { trpc, trpcClient } from "@renderer/shared/lib/helpers";
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

const App = () => (
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className={css.App} data-testid="App">
          <aside>
            <AppNavBar className={css.navBar} />
          </aside>
          <main>
            <AppRoutes />
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  </trpc.Provider>
);

export { App };

export default App;
