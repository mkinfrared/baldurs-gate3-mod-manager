import { createTRPCReact } from "@trpc/react-query";

import { AppRouter } from "main/router";

const trpc = createTRPCReact<AppRouter>();

export { trpc };
