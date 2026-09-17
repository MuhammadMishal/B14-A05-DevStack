import type { IconType } from "react-icons";

export interface TechnologyJson {
  id: string;
  name: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  badge?: string;
  icon: string;
  iconColor: string;
  badgeStyle?: string;
}

export interface Technology extends Omit<TechnologyJson, "icon"> {
  icon: IconType;
}
