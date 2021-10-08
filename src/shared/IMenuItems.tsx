export interface MenuItemProps {
  menuItems: MenuItemType[]
}

export type MenuItemType = {
  title: string
  href: string
  sublinks?: MenuItemType[]
}
