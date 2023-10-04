import { ComponentType } from "react";

export type LazyFunction<T extends ComponentType<unknown>> = () => Promise<{
  default: T;
}>;
