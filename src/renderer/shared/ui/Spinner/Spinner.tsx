import Bars from "renderer/shared/assets/spinners/bars.svg";
import Oval from "renderer/shared/assets/spinners/oval.svg";
import Puff from "renderer/shared/assets/spinners/puff.svg";
import Rings from "renderer/shared/assets/spinners/rings.svg";
import Ripple from "renderer/shared/assets/spinners/ripple-1s-200px.svg";
import TailSpin from "renderer/shared/assets/spinners/tail-spin.svg";
import { classNames } from "renderer/shared/lib/helpers";

import css from "./Spinner.module.scss";
import { SpinnerProps } from "./Spinner.type";

const Spinner = ({ className, type = "oval" }: SpinnerProps) => {
  const props = { className: classNames(css.Spinner, className) };

  switch (type) {
    case "bars":
      return <Bars {...props} />;
    case "oval":
      return <Oval {...props} />;
    case "puff":
      return <Puff {...props} />;
    case "rings":
      return <Rings {...props} />;
    case "ripple":
      return <Ripple {...props} />;
    case "tail-spin":
      return <TailSpin {...props} />;
    default:
      return <Oval {...props} />;
  }
};

export default Spinner;
