export default interface MenuItemProps {
  menuItems: MenuItemType[]
}

type MenuItemType = {
  title: string
  href: string
  sublinks?: MenuItemType[]
}
