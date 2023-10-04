import { ChangeEvent, useRef, useState } from "react";

import { classNames, mergeRefs } from "renderer/shared/lib/helpers";
import Heading from "renderer/shared/ui/Heading";
import Text from "renderer/shared/ui/Text";

import css from "./TextArea.module.scss";
import { TextAreaProps } from "./TextArea.type";

const TextArea = ({
  autoComplete,
  className,
  disabled = false,
  error,
  name,
  label,
  maxCharValue,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  textAreaRef,
  value,
}: TextAreaProps) => {
  const initialRows = 4;
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [charCount, setCharCount] = useState(() => value?.length ?? 0);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { current } = ref;

    if (current) {
      setCharCount(current.value.length);
    }

    onChange?.(event);
  };

  const getCounter = () => {
    if (!maxCharValue) {
      return;
    }

    return maxCharValue - charCount;
  };

  return (
    <label
      className={classNames(css.TextArea, className)}
      data-testid="TextArea"
    >
      <div className={css.labelBlock}>
        {label && (
          <Heading className={css.label} variant="h4">
            {label}
          </Heading>
        )}
        <Text className={css.counter}>{getCounter()}</Text>
      </div>
      <div className={classNames(css.container, css.textAreaContainer)}>
        <textarea
          autoComplete={autoComplete}
          disabled={disabled}
          name={name}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
          rows={initialRows}
          ref={mergeRefs(ref, textAreaRef)}
          placeholder={placeholder}
          value={value}
        />
      </div>
      <div className={css.errorContainer}>
        <Text className={css.error}>{error}</Text>
      </div>
    </label>
  );
};

export default TextArea;
