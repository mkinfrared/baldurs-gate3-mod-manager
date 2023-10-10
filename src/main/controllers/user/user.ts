import z from "zod";

import { t } from "@main/shared/lib/helpers";

import { createUserValidation } from "./validation";

const getAllUsers = t.procedure
  .input(z.number())
  .query(({ input }) => [42, "marklar", input]);

const createUser = t.procedure
  .input(createUserValidation)
  .mutation(({ input: { name, dateCreated } }) => {
    // eslint-disable-next-line no-console
    console.log("Creating user on ", dateCreated.toLocaleString());

    return `user with ${name} and ${dateCreated}`;
  });

const userController = { getAllUsers, createUser };

export { userController };
