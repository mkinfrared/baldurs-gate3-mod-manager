import z from "zod";

const stringArrayValidation = z.array(z.string());
const stringValidation = z.string();

export { stringArrayValidation, stringValidation };
