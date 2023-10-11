import Tick from "@renderer/shared/assets/icons/tick.svg";
import { classNames, mergeRefs } from "@renderer/shared/lib/helpers";
import Text from "@renderer/shared/ui/Text";

import css from "./Checkbox.module.scss";
import { CheckboxProps } from "./Checkbox.type";

/**
 * Renders an html checkbox
 */
const Checkbox = ({
  className,
  checked,
  defaultChecked,
  disabled = false,
  error = false,
  inputRef,
  label,
  name,
  onChange,
  readOnly = false,
  value,
}: CheckboxProps) => {
  const mergedRefs = mergeRefs(inputRef);

  return (
    <label
      className={classNames(css.Checkbox, error && css.error, className)}
      data-testid="Checkbox"
    >
      <input
        className={classNames(css.input, error && css.error)}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        ref={mergedRefs}
        readOnly={readOnly}
        type="checkbox"
        value={value}
      />
      <div className={css.container}>
        <div className={css.box}>
          <Tick className={css.tick} />
        </div>
        {label && <Text className={css.text}>{label}</Text>}
      </div>
    </label>
  );
};

export { Checkbox };

export default Checkbox;
