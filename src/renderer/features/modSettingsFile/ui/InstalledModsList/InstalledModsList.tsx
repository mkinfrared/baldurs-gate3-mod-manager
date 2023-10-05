import { classNames } from "renderer/shared/lib/helpers";
import { Heading } from "renderer/shared/ui";

import { EmptyList } from "../EmptyList";

import css from "./InstalledModsList.module.scss";
import { InstalledModsListProps } from "./InstalledModsList.type";

const InstalledModsList = ({ className }: InstalledModsListProps) => (
  // TODO fix when getInstalledMods is refactored
  // const installedMods = suspend(getInstalledMods);

  <div
    className={classNames(css.InstalledModsList, className)}
    data-testid="InstalledModsList"
  >
    <div>
      <Heading variant="h3">Active Mods</Heading>
      <EmptyList>
        <Heading variant="h4">
          Activate the mods from the Installed Mods list below using Activate
          button and they will appear here
        </Heading>
      </EmptyList>
    </div>
    <div>
      <Heading variant="h3">Installed Mods</Heading>
      <EmptyList>
        <Heading variant="h4">
          You haven't installed any mods yet. Use the panel on the right to
          install mods
        </Heading>
      </EmptyList>
    </div>
  </div>
);

export { InstalledModsList };
