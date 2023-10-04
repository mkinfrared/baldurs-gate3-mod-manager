import z from "zod";

const filesValidation = z.array(z.string());

export { filesValidation };
