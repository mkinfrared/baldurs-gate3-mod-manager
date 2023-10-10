import { inferReactQueryProcedureOptions } from "@trpc/react-query";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import { AppRouter } from "@main/router";

type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;

type RouterInputs = inferRouterInputs<AppRouter>;

type RouterOutputs = inferRouterOutputs<AppRouter>;

export type { ReactQueryOptions, RouterInputs, RouterOutputs };
