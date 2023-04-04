export type SidenavItemProps = {
  name: string;
  id: string;
  active?: boolean;

  handleClick?: (id: string) => void;
};
