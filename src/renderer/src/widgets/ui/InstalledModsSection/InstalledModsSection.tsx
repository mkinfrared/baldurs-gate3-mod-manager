// import { Suspense } from "react";

import { useRef } from "react";

import { InstalledModsList } from "@renderer/features/modSettingsFile";
import { SuspenseError } from "@renderer/shared/components";
import { classNames } from "@renderer/shared/lib/helpers";
import { Loading } from "@renderer/shared/ui";

import css from "./InstalledModsSection.module.scss";
import { InstalledModsSectionProps } from "./InstalledModsSection.type";

const InstalledModsSection = ({ className }: InstalledModsSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={classNames(css.InstalledModsSection, className)}
      data-testid="InstalledModsSection"
      ref={ref}
    >
      <SuspenseError loadingFallback={<Loading />}>
        <InstalledModsList />
      </SuspenseError>
    </div>
  );
};

export { InstalledModsSection };
