import { NavLink as RouterLink, useMatch } from "react-router-dom";

import { classNames } from "@renderer/shared/lib/helpers";
import { Link } from "@renderer/shared/ui";

import css from "./GameNavLink.module.scss";
import { GameNavLinkProps } from "./GameNavLink.type";

const GameNavLink = ({ children, className, to }: GameNavLinkProps) => {
  const match = useMatch(to.toString());
  const variant = match ? "contained" : "outlined";

  return (
    <Link
      as="icon"
      className={classNames(css.GameNavLink, className)}
      component={RouterLink}
      to={to}
      variant={variant}
    >
      {children}
    </Link>
  );
};

export { GameNavLink };
