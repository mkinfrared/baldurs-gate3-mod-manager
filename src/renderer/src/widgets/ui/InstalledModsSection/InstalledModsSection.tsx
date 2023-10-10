import { Suspense } from "react";

import { InstalledModsList } from "@renderer/features/modSettingsFile";

import css from "./InstalledModsSection.module.scss";
import { InstalledModsSectionProps } from "./InstalledModsSection.type";

const InstalledModsSection = ({ className }: InstalledModsSectionProps) => {
  const classNames = [css.InstalledModsSection, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} data-testid="InstalledModsSection">
      <Suspense fallback={<div>Loading..</div>}>
        <InstalledModsList />
      </Suspense>
    </div>
  );
};

export { InstalledModsSection };
