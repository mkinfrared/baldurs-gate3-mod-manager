import { InstalledModsList } from "@renderer/features/modSettingsFile";
import { SuspenseError } from "@renderer/shared/components";
import { classNames } from "@renderer/shared/lib/helpers";
import { Loading } from "@renderer/shared/ui";

import css from "./InstalledModsSection.module.scss";
import { InstalledModsSectionProps } from "./InstalledModsSection.type";

const InstalledModsSection = ({
  className,
  game,
}: InstalledModsSectionProps) => (
  <div
    className={classNames(css.InstalledModsSection, className)}
    data-testid="InstalledModsSection"
  >
    <SuspenseError loadingFallback={<Loading />}>
      <InstalledModsList game={game} />
    </SuspenseError>
  </div>
);

export { InstalledModsSection };
