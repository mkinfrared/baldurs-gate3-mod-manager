import { classNames, mergeRefs } from "@renderer/shared/lib/helpers";
import FakeButton from "@renderer/shared/ui/FakeButton";
import Heading from "@renderer/shared/ui/Heading";
import Text from "@renderer/shared/ui/Text";

import css from "./TextField.module.scss";
import { TextFieldProps } from "./TextField.type";

const TextField = ({
  autoComplete,
  className,
  disabled = false,
  error,
  inputRef,
  name,
  label,
  onBlur,
  onChange,
  onFocus,
  onSuffixClick,
  placeholder,
  prefix,
  suffix,
  type = "text",
  value,
}: TextFieldProps) => {
  const mergedRefs = mergeRefs(inputRef);

  return (
    <label
      className={classNames(css.TextField, className)}
      data-testid="TextField"
    >
      {label && (
        <Heading variant="h4" className={css.label}>
          {label}
        </Heading>
      )}
      <div className={css.container}>
        {prefix && <FakeButton className={css.prefix}>{prefix}</FakeButton>}
        <input
          autoComplete={autoComplete}
          disabled={disabled}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          ref={mergedRefs}
          type={type}
          value={value}
        />
        {suffix && (
          <FakeButton
            ariaLabel="toggle password visibility"
            className={css.suffix}
            onClick={onSuffixClick}
          >
            {suffix}
          </FakeButton>
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

export default TextField;
