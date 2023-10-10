import { useEffect, useRef } from "react";

import { Callback, Refs } from "./useOutsideClick.type";

const useOutsideClick = (refs: Refs, callback: Callback): void => {
  const effectTimestamp = useRef(performance.now());

  const handleClick = (event: MouseEvent) => {
    if (effectTimestamp.current > event.timeStamp) {
      // Ignore events that were fired before the effect ran,
      // in case this effect is being run while an event is currently bubbling.
      // In that case, we don't want to react to a pre-existing event.
      return;
    }

    const path = event.composedPath();

    const isOutside = refs.some(
      (ref) => ref.current && path.includes(ref.current),
    );

    if (!isOutside) {
      callback();
    }
  };

  useEffect(() => {
    effectTimestamp.current = performance.now();

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
};

export { useOutsideClick };
