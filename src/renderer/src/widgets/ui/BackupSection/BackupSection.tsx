import {
  BackupList,
  RestoreDefaultSettings,
  SaveSettingsButton,
} from "@renderer/features/backup";
import { SuspenseError } from "@renderer/shared/components";
import { classNames } from "@renderer/shared/lib/helpers";

import css from "./BackupSection.module.scss";
import { BackupSectionProps } from "./BackupSection.type";

const BackupSection = ({ className, game }: BackupSectionProps) => (
  <div
    className={classNames(css.BackupSection, className)}
    data-testid="BackupSection"
  >
    <div className={css.buttonGroup}>
      <SaveSettingsButton game={game} />
      <RestoreDefaultSettings game={game} />
    </div>
    <SuspenseError>
      <BackupList game={game} />
    </SuspenseError>
  </div>
);

export { BackupSection };
