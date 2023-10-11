import { uniqueId } from "lodash-es";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useMemo,
  useRef,
  useState,
} from "react";

import ArrowLeft from "@renderer/shared/assets/icons/arrow-down.svg";
import {
  classNames,
  getNodeText,
  isHtmlElement,
} from "@renderer/shared/lib/helpers";
import Heading from "@renderer/shared/ui/Heading";
import Menu from "@renderer/shared/ui/Menu";
import MenuItem from "@renderer/shared/ui/MenuItem";
import Spinner from "@renderer/shared/ui/Spinner";
import Text from "@renderer/shared/ui/Text";

import css from "./Select.module.scss";
import { SelectProps } from "./Select.type";

const Select = <T,>({
  className,
  disabled,
  error,
  filterable,
  getOptionLabel,
  getActiveOption,
  isLoading,
  label,
  name,
  options,
  onChange,
  placeholder,
  prefix,
  value,
}: SelectProps<T>) => {
  const [searchValue, setSearchValue] = useState<string>();
  const [isListboxOpen, setIsListboxOpen] = useState(false);
  const listboxId = useMemo(() => uniqueId("listbox"), []);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const closeListbox = () => {
    setIsListboxOpen(false);
  };

  const handleEnterDown = () => {
    if (isListboxOpen) {
      containerRef.current?.focus();
    }
  };

  const handleArrowPress = (key: "ArrowDown" | "ArrowUp") => {
    if (key === "ArrowDown") {
      setIsListboxOpen(true);
    }

    const listbox = document.getElementById(listboxId);

    if (!listbox) {
      return;
    }

    const element = listbox.querySelector('[tabindex="0"]');
    const { firstChild } = listbox;

    if (isHtmlElement(element)) {
      element.focus();

      return;
    }

    // If no element has tabIndex equal to 0
    // make the first element interactive
    if (isHtmlElement(firstChild)) {
      firstChild.tabIndex = 0;

      firstChild.focus();
    }
  };

  const handleKeyDown: KeyboardEventHandler = (event) => {
    const { key } = event;

    if (key === "Enter") {
      handleEnterDown();
    }

    if (key === "ArrowDown") {
      handleArrowPress("ArrowDown");
    }

    if (key === "ArrowUp") {
      handleArrowPress("ArrowUp");
    }

    if (key === "ArrowLeft" || key === "ArrowRight") {
      inputRef.current?.focus();
    }

    if (key === "Escape") {
      setIsListboxOpen(false);

      containerRef.current?.focus();
    }
  };

  const handleMenuItemClick = (itemValue?: T) => {
    onChange(itemValue);

    setSearchValue(undefined);

    closeListbox();
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  const getSuffix = () => {
    if (isLoading) {
      return <Spinner />;
    }

    return <ArrowLeft />;
  };

  const menuItems = options
    .filter((option) => {
      if (!searchValue) {
        return true;
      }

      const regex = new RegExp(searchValue, "i");
      const optionLabel = getOptionLabel(option);
      const optionText = getNodeText(optionLabel);

      return regex.test(optionText.toString());
    })
    .map((option, index) => (
      <MenuItem
        key={(option as any).id ?? index}
        onClick={handleMenuItemClick}
        isSelected={getActiveOption(option)}
        value={option}
      >
        {getOptionLabel(option)}
      </MenuItem>
    ));

  return (
    <label className={classNames(css.Select, className)} data-testid="Select">
      {label && (
        <Heading variant="h4" className={css.label}>
          {label}
        </Heading>
      )}
      <div
        aria-controls={listboxId}
        aria-expanded={isListboxOpen}
        className={css.container}
        ref={containerRef}
        onKeyDown={handleKeyDown}
        role="combobox"
        tabIndex={0}
      >
        {prefix && <div className={css.prefix}>{prefix}</div>}
        <input
          autoComplete="chrome-off"
          disabled={disabled}
          name={name}
          onChange={handleInputChange}
          onFocus={() => setIsListboxOpen(true)}
          placeholder={placeholder}
          readOnly={filterable}
          ref={inputRef}
          type="text"
          value={searchValue ?? getNodeText(getOptionLabel(value))}
        />
        <div className={css.suffix}>{getSuffix()}</div>
        {isListboxOpen && (
          <Menu
            id={listboxId}
            comboboxRef={containerRef}
            onClose={closeListbox}
          >
            {menuItems}
          </Menu>
        )}
      </div>
      <div className={css.errorContainer}>
        <Text className={css.error} size="small">
          {error}
        </Text>
      </div>
    </label>
  );
};

export default Select;
