import { ModFileForm } from "@renderer/features/modFile";
import { classNames } from "@renderer/shared/lib/helpers";
import { Heading, StickyBlock } from "@renderer/shared/ui";

import css from "./ModFileSection.module.scss";
import { ModFileSectionProps } from "./ModFileSection.type";

const ModFileSection = ({ className, game }: ModFileSectionProps) => (
  <div
    className={classNames(css.ModFileSection, className)}
    data-testid="ModFileSection"
  >
    <StickyBlock>
      <Heading>Modification Files</Heading>
    </StickyBlock>
    <ModFileForm game={game} />
  </div>
);

export { ModFileSection };
