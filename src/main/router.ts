import {
  backupController,
  modController,
  settingsController,
} from "./controllers";
import { t } from "./shared/lib/helpers";

const appRouter = t.router({
  backup: t.router({ ...backupController }),
  mod: t.router({ ...modController }),
  settings: t.router({ ...settingsController }),
});

export type AppRouter = typeof appRouter;

export { appRouter };
