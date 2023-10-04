import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";

import { createTrpcClient, trpc } from "renderer/shared/lib/helpers";

import icon from "../../../../../assets/icons/1024x1024.png";

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
const trpcClient = createTrpcClient();

const Hello = () => {
  const { data } = trpc.getAllUsers.useQuery(35);

  return (
    <div>
      <div className={css.Hello}>
        <img width="200" alt="icon" src={icon} />
      </div>
      <div />
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs!! The response from trpc is {data}
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

const App = () => (
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </trpc.Provider>
);

export { App };

export default App;
