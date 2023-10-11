import { Ref, RefObject } from "react";

type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

type Refs<T> = (Ref<T | null | undefined> | undefined)[];

const mergeRefs =
  <T>(...refs: Refs<T>) =>
  (value: T): void => {
    for (let i = 0; i < refs.length; i++) {
      const ref = refs[i];

      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        (ref as Mutable<RefObject<T>>).current = value;
      }
    }
  };

export { mergeRefs };
