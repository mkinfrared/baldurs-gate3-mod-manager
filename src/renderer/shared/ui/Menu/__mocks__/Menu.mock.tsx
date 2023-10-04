import { MenuProps } from "../Menu.type";

const MenuMock = (props: MenuProps) => (
  <div data-testid="Menu">{JSON.stringify(props)}</div>
);

export default MenuMock;
