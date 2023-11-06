import { useLayoutEffect, useRef } from "react";

import { classNames } from "@renderer/shared/lib/helpers";

import Spinner from "../Spinner";

import css from "./Loading.module.scss";
import { LoadingProps } from "./Loading.type";

const Loading = ({ className, type }: LoadingProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { current } = ref;

    if (current?.parentElement) {
      const height = current.parentElement.clientHeight;
      const { position } = getComputedStyle(current.parentElement);

      if (position === "static") {
        current.parentElement.style.position = "relative";
      }

      current.parentElement.style.height = `${height}px`;

      current.parentElement.style.overflow = "hidden";

      current.style.height = `${current.parentElement.clientHeight}px`;
    }

    return () => {
      current?.parentElement?.style.removeProperty("position");

      current?.parentElement?.style.removeProperty("height");

      current?.parentElement?.style.removeProperty("overflow");
    };
  }, []);

  return (
    <div className={classNames(css.Loading, className)} ref={ref}>
      <Spinner className={css.spinner} type={type} />
    </div>
  );
};

export default Loading;
