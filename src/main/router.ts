import { userController } from "./controllers";
import { t } from "./shared/lib/helpers";

const appRouter = t.router({
  getAllUsers: userController.getAllUsers,
  createUser: userController.createUser,
});

export type AppRouter = typeof appRouter;

export { appRouter };
