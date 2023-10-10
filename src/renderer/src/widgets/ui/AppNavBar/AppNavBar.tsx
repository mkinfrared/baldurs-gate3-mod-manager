import { Link } from "react-router-dom";

import { APP_ROUTES } from "@renderer/routes/AppRoutes/AppRoutes.type";
import bg3Logo from "@renderer/shared/assets/images/BG3-logo.png";
import { classNames } from "@renderer/shared/lib/helpers";

import css from "./AppNavBar.module.scss";
import { AppNavBarProps } from "./AppNavBar.type";

const AppNavBar = ({ className }: AppNavBarProps) => (
  <div className={classNames(css.AppNavBar, className)} data-testid="AppNavBar">
    <Link to={APP_ROUTES.BaldursGate3.path}>
      <img src={bg3Logo} alt="Baldur's Gate 3 Logo" />
    </Link>
  </div>
);

export { AppNavBar };
