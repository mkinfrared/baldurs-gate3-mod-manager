import { AppNavBarProps } from "../AppNavBar.type";

const AppNavBarMock = (props: AppNavBarProps) => (
  <div data-testid="AppNavBar">{JSON.stringify(props)}</div>
);

export default AppNavBarMock;
