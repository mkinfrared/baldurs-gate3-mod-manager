import { classNames } from "@renderer/shared/lib/helpers";

import css from "./StickyBlock.module.scss";
import { StickyBlockProps } from "./StickyBlock.type";

const StickyBlock = ({ className, children }: StickyBlockProps) => (
  <div
    className={classNames(css.StickyBlock, className)}
    data-testid="StickyBlock"
  >
    {children}
  </div>
);

export default StickyBlock;
