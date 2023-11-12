import { SettingsForm } from "@renderer/features/settings";
import { SuspenseError } from "@renderer/shared/components";
import { classNames } from "@renderer/shared/lib/helpers";
import { Heading, Loading } from "@renderer/shared/ui";

import css from "./Settings.module.scss";
import { SettingsProps } from "./Settings.type";

const Settings = ({ className, game }: SettingsProps) => (
  <section
    className={classNames(css.Settings, className)}
    data-testid="Settings"
  >
    <Heading variant="h1">Settings</Heading>
    <SuspenseError loadingFallback={<Loading />}>
      <SettingsForm game={game} />
    </SuspenseError>
  </section>
);

export { Settings };
