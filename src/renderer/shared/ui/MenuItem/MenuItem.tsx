import {
  KeyboardEventHandler,
  // useEffect,
  useLayoutEffect,
  useRef,
} from "react";

import { classNames, isHtmlElement } from "renderer/shared/lib/helpers";

import css from "./MenuItem.module.scss";
import { MenuItemProps } from "./MenuItem.type";

const MenuItem = <T,>({
  className,
  children,
  isSelected,
  onClick,
  onFocus,
  value,
}: MenuItemProps<T>) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleClick = () => {
    onClick?.(value);
  };

  const handleFocus = () => {
    onFocus?.(value);
  };

  const handleArrowDown = () => {
    const { current } = ref;

    if (!current) {
      return;
    }

    const { nextSibling } = current;

    if (!isHtmlElement(nextSibling)) {
      return;
    }

    current.tabIndex = -1;

    nextSibling.tabIndex = 0;

    nextSibling.focus();
  };

  const handleArrowUp = () => {
    const { current } = ref;

    if (!current) {
      return;
    }

    const { previousSibling } = current;

    if (!isHtmlElement(previousSibling)) {
      return;
    }

    current.tabIndex = -1;

    previousSibling.tabIndex = 0;

    previousSibling.focus();
  };

  const handleKeyDown: KeyboardEventHandler = (event) => {
    const { key } = event;
    const { current } = ref;
    const { activeElement } = document;

    if (current !== activeElement) {
      return;
    }

    if (key === "ArrowDown") {
      event.preventDefault();

      handleArrowDown();
    }

    if (key === "ArrowUp") {
      event.preventDefault();

      handleArrowUp();
    }

    if (key === "Enter") {
      event.preventDefault();

      onClick?.(value);
    }
  };

  const ariaSelected = isSelected;
  const tabIndex = ariaSelected ? 0 : -1;

  useLayoutEffect(() => {
    if (isSelected) {
      // TODO debug why scrollIntoView doesn't work
      // if Menu is opened on ArrowDown event
      setTimeout(() => {
        ref.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      }, 0);
    }
  }, [isSelected]);

  return (
    <li
      aria-selected={ariaSelected}
      className={classNames(css.MenuItem, className)}
      data-testid="MenuItem"
      onClick={handleClick}
      onFocus={handleFocus}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
      ref={ref}
      role="option"
    >
      {children}
    </li>
  );
};

export default MenuItem;
