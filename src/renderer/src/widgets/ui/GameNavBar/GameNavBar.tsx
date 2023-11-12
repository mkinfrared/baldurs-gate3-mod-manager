import { APP_ROUTES } from "@renderer/routes/AppRoutes/AppRoutes.type";
import Collection from "@renderer/shared/assets/icons/collector.svg";
import Database from "@renderer/shared/assets/icons/database.svg";
import Gear from "@renderer/shared/assets/icons/gear.svg";
import { classNames } from "@renderer/shared/lib/helpers";

import css from "./GameNavBar.module.scss";
import { GameNavBarProps } from "./GameNavBar.type";
import { GameNavLink } from "./ui";

const GameNavBar = ({ className }: GameNavBarProps) => (
  <nav
    className={classNames(css.GameNavBar, className)}
    data-testid="GameNavBar"
  >
    <GameNavLink to={APP_ROUTES.BaldursGate3.path}>
      <Collection />
    </GameNavLink>
    <GameNavLink to={APP_ROUTES.BaldursGate3.BACKUP.path}>
      <Database />
    </GameNavLink>
    <GameNavLink to={APP_ROUTES.BaldursGate3.SETTINGS.path}>
      <Gear />
    </GameNavLink>
  </nav>
);

export { GameNavBar };
