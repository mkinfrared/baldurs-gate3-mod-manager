import { InstalledMod } from "@renderer/features/modSettingsFile/ui/InstalledMod";
import { ModsOrder } from "@renderer/features/modSettingsFile/ui/ModsOrder";
import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Heading, StickyBlock } from "@renderer/shared/ui";

import { EmptyList } from "../EmptyList";

import css from "./InstalledModsList.module.scss";
import { InstalledModsListProps } from "./InstalledModsList.type";

const InstalledModsList = ({ className }: InstalledModsListProps) => {
  const { data } = trpc.mod.getInstalledMods.useQuery();

  return (
    <div
      className={classNames(css.InstalledModsList, className)}
      data-testid="InstalledModsList"
    >
      <ModsOrder mods={data?.activeMods} />
      <div>
        <StickyBlock>
          <Heading variant="h3">Installed Mods</Heading>
        </StickyBlock>
        {data?.installedMods.length ? (
          data?.installedMods.map((mod, index) => (
            <InstalledMod
              key={mod.uuid ?? mod.name}
              mod={mod}
              position={index + 1}
            />
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
