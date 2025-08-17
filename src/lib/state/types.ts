export type SharedState<T> = { value: T };

export type Theme = 'dark' | 'light';

export type NavListItem = NavItemProps | NavSectionProps;

export type NavItemProps = {
  closeOnClick?: boolean;
  disabled?: boolean;
  exact?: boolean;
  external?: boolean;
  icon?: string;
  isActive?: boolean;
  label: string;
  noAction?: boolean;
  path: string;
  pathMatch?: string;
  onclick?(): void | Promise<void>;
}

export type NavSectionProps = {
  icon?: string;
  isActive?: boolean;
  items: NavListItem[];
  showBottomBorder?: boolean;
  showTopBorder?: boolean;
  title: string;
}