import { MenuItem } from "../Index";

export interface MobileMenuProps {
    menuItems: MenuItem[];
    onClose?: () => void;
  }