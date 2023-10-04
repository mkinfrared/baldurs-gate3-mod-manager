import { MenuItemProps } from "../MenuItem.type";

const MenuItemMock = (props: MenuItemProps<any>) => (
  <div data-testid="MenuItem">{JSON.stringify(props)}</div>
);

export default MenuItemMock;
