import { useCallback, useEffect, useState } from "react";

const defaultConfig: MutationObserverInit = {
  childList: true,
  subtree: true,
};

const useMutationObserver = (cb: MutationCallback, config = defaultConfig) => {
  const [observer, setObserver] = useState<MutationObserver | null>(null);

  useEffect(() => {
    const obs = new MutationObserver(cb);

    setObserver(obs);
  }, [cb, config, setObserver]);

  const refCallback = useCallback(
    (node: HTMLElement | null) => {
      if (!observer || !node) {
        return;
      }

      observer.observe(node, config);
    },
    [config, observer],
  );

  useEffect(
    () => () => {
      observer?.disconnect();
    },
    [observer, config],
  );

  return refCallback;
};

export { useMutationObserver };
