import css from "./AppNavBar.module.scss";
import { AppNavBarProps } from "./AppNavBar.type";

const AppNavBar = ({ className }: AppNavBarProps) => {
  const classNames = [css.AppNavBar, className].filter(Boolean).join(" ");

  return (
    <div className={classNames} data-testid="AppNavBar">
      AppNavBar works!!
    </div>
  );
};

export { AppNavBar };
