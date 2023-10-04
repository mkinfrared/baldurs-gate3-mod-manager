import { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { classNames } from "renderer/shared/lib/helpers";
import { useOutsideClick } from "renderer/shared/lib/hooks";

import css from "./Menu.module.scss";
import { MenuProps } from "./Menu.type";

// TODO fix Y position in iOS on scroll
const Menu = ({ className, children, comboboxRef, id, onClose }: MenuProps) => {
  const { body } = document;
  const ref = useRef<HTMLUListElement>(null);

  useOutsideClick([ref, comboboxRef], onClose);

  const computeVisualYAxis = (
    combobox: HTMLElement,
    dropdownMenu: HTMLElement,
  ) => {
    const { top, bottom } = combobox.getBoundingClientRect();
    const { height: comboboxHeight } = dropdownMenu.getBoundingClientRect();
    const nextBottomY = bottom + comboboxHeight;
    const nextTopY = top - comboboxHeight;

    // if dropdown bottom edge doesn't show up outside the viewport
    // place it at the bottom of combobox
    if (nextBottomY < window.visualViewport!.height) {
      dropdownMenu.style.setProperty("--top", `${bottom}px`);

      // else if dropdown top edge doesn't show up outside the viewport
      // place it at the top of combobox
    } else if (nextTopY >= 0) {
      dropdownMenu.style.setProperty("--top", `${top - comboboxHeight}px`);
      // otherwise place it at the bottom of combobox
    } else {
      dropdownMenu.style.setProperty("--top", `${bottom}px`);
    }
  };

  const computeYAxis = (combobox: HTMLElement, dropdownMenu: HTMLElement) => {
    if (window.visualViewport) {
      computeVisualYAxis(combobox, dropdownMenu);

      return;
    }

    const { top, bottom } = combobox.getBoundingClientRect();
    const { height: comboboxHeight } = dropdownMenu.getBoundingClientRect();
    const nextBottomY = bottom + comboboxHeight;
    const nextTopY = top - comboboxHeight;

    // if dropdown bottom edge doesn't show up outside the viewport
    // place it at the bottom of combobox
    if (nextBottomY < window.innerHeight) {
      dropdownMenu.style.setProperty("--top", `${bottom}px`);

      // else if dropdown top edge doesn't show up outside the viewport
      // place it at the top of combobox
    } else if (nextTopY >= 0) {
      dropdownMenu.style.setProperty("--top", `${top - comboboxHeight}px`);
      // otherwise place it at the bottom of combobox
    } else {
      dropdownMenu.style.setProperty("--top", `${bottom}px`);
    }
  };

  const computeXAxis = (combobox: HTMLElement, dropdownMenu: HTMLElement) => {
    const { left, right, width } = combobox.getBoundingClientRect();
    // const { width: comboboxWidth } = dropdownMenu.getBoundingClientRect();
    const nextRightX = left + width;
    const nextLeftX = right - width;

    // if dropdown right edge doesn't show up outside the viewport
    // place it at the left of combobox
    if (nextRightX < window.innerWidth) {
      dropdownMenu.style.setProperty("--left", `${left}px`);

      // else if dropdown left edge doesn't show up outside the viewport
      // place it at the right of combobox
    } else if (nextLeftX >= 0) {
      dropdownMenu.style.setProperty("--left", `${nextLeftX}px`);
      // otherwise place it at the left of viewport and set the width of viewport
    } else {
      dropdownMenu.style.setProperty("--left", "0px");
    }

    dropdownMenu.style.setProperty("--combobox-width", `${width}px`);
  };

  const setPosition = (comboboxElement: HTMLElement) => {
    const { current } = ref;

    if (!current) {
      return;
    }

    const { width } = comboboxElement.getBoundingClientRect();

    current.style.setProperty("--combobox-width", `${width}px`);

    computeYAxis(comboboxElement, current);

    computeXAxis(comboboxElement, current);
  };

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";

    if (comboboxRef.current) {
      setPosition(comboboxRef.current);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [children, comboboxRef]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (comboboxRef.current) {
        setPosition(comboboxRef.current);
      }
    };

    window.addEventListener("resize", handleResize);

    window.visualViewport?.addEventListener("resize", handleResize);

    window.visualViewport?.addEventListener("scroll", () => {
      setTimeout(handleResize, 1000);
    });

    return () => {
      window.removeEventListener("resize", handleResize);

      window.visualViewport?.removeEventListener("resize", handleResize);

      window.visualViewport?.removeEventListener("scroll", handleResize);
    };
  }, []);

  return createPortal(
    <ul
      className={classNames(css.Menu, className)}
      data-testid="Menu"
      id={id}
      ref={ref}
      role="listbox"
      onKeyDown={() => null}
    >
      {children}
    </ul>,
    body,
  );
};

export default Menu;
