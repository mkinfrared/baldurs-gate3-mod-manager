import z from "zod";

const stringArrayValidation = z.array(z.string());
const stringValidation = z.string();

const modInfoValidation = z.object({
  fileName: z.string(),
  name: z.string().optional(),
  uuid: z.string().optional(),
});

const modInfoArrayValidation = z.array(modInfoValidation);

export {
  stringArrayValidation,
  modInfoValidation,
  modInfoArrayValidation,
  stringValidation,
};
