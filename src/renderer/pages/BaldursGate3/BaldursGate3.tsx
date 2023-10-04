import { classNames } from "renderer/shared/lib/helpers";
import { InstalledModsSection, ModFileSection } from "renderer/widgets/ui";

import css from "./BaldursGate3.module.scss";
import { BaldursGate3Props } from "./BaldursGate3.type";

const BaldursGate3 = ({ className }: BaldursGate3Props) => (
  <div
    className={classNames(css.BaldursGate3, className)}
    data-testid="BaldursGate3"
  >
    <InstalledModsSection />
    <ModFileSection />
  </div>
);

export { BaldursGate3 };
