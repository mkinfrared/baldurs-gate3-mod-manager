import { modController, userController } from "./controllers";
import { t } from "./shared/lib/helpers";

const appRouter = t.router({
  user: t.router({ ...userController }),
  mod: t.router({
    ...modController,
  }),
});

export type AppRouter = typeof appRouter;

export { appRouter };
