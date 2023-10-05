import { InstalledMod } from "renderer/features/modSettingsFile/ui/InstalledMod";
import { classNames, trpc } from "renderer/shared/lib/helpers";
import { Heading } from "renderer/shared/ui";

import { EmptyList } from "../EmptyList";

import css from "./InstalledModsList.module.scss";
import { InstalledModsListProps } from "./InstalledModsList.type";

// TODO fix when getInstalledMods is refactored
// const installedMods = suspend(getInstalledMods);
const InstalledModsList = ({ className }: InstalledModsListProps) => {
  const { data } = trpc.mod.getInstalledMods.useQuery();
  const activeMods = data?.filter(({ isActive }) => isActive);

  return (
    <div
      className={classNames(css.InstalledModsList, className)}
      data-testid="InstalledModsList"
    >
      <div>
        <Heading variant="h3">Active Mods</Heading>
        {activeMods?.length ? (
          activeMods.map((mod) => (
            <InstalledMod key={mod.uuid ?? mod.name} mod={mod} />
          ))
        ) : (
          <EmptyList>
            <Heading variant="h4">
              Activate the mods from the Installed Mods list below using
              Activate button and they will appear here
            </Heading>
          </EmptyList>
        )}
      </div>
      <div>
        <Heading variant="h3">Installed Mods</Heading>
        {data?.length ? (
          data?.map((mod) => (
            <InstalledMod key={mod.uuid ?? mod.name} mod={mod} />
          ))
        ) : (
          <EmptyList>
            <Heading variant="h4">
              You haven't installed any mods yet. Use the panel on the right to
              install mods
            </Heading>
          </EmptyList>
        )}
      </div>
    </div>
  );
};

export { InstalledModsList };
