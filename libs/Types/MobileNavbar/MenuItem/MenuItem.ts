export interface MenuItem {
  label: string;
  href?: string;
  subMenu?: { label: string; href: string }[];
}
