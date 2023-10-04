import z from "zod";

const createUserValidation = z.object({
  name: z.string(),
  dateCreated: z.date(),
});

export { createUserValidation };
