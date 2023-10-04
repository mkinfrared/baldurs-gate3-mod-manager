import { Suspense } from "react";

import { InstalledModsList } from "renderer/features/modSettingsFile";
import { Heading } from "renderer/shared/ui";

import css from "./InstalledModsSection.module.scss";
import { InstalledModsSectionProps } from "./InstalledModsSection.type";

const InstalledModsSection = ({ className }: InstalledModsSectionProps) => {
  const classNames = [css.InstalledModsSection, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} data-testid="InstalledModsSection">
      <Heading>Installed Mods</Heading>
      <Suspense fallback={<div>Loading..</div>}>
        <InstalledModsList />
      </Suspense>
    </div>
  );
};

export { InstalledModsSection };
