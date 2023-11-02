import { modController } from "./controllers";
import { t } from "./shared/lib/helpers";

const appRouter = t.router({
  mod: t.router({
    ...modController,
  }),
});

export type AppRouter = typeof appRouter;

export { appRouter };
