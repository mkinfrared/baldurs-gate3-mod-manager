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

const App = () => (
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className={css.App}>
          <aside>
            <AppNavBar />
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
