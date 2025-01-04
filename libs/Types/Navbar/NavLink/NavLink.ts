export interface NavLink {
    href: string;
    label: string;
    submenu?: NavLink[];
}