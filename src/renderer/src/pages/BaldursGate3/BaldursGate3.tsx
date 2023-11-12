import { classNames } from "@renderer/shared/lib/helpers";
import { InstalledModsSection, ModFileSection } from "@renderer/widgets";

import css from "./BaldursGate3.module.scss";
import { BaldursGate3Props } from "./BaldursGate3.type";

const BaldursGate3 = ({ className }: BaldursGate3Props) => {
  const game = "BG3";

  return (
    <div
      className={classNames(css.BaldursGate3, className)}
      data-testid="BaldursGate3"
    >
      <InstalledModsSection game={game} />
      <ModFileSection game={game} />
    </div>
  );
};

export { BaldursGate3 };
