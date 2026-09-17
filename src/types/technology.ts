import type { IconType } from "react-icons";

/** Shape of one item inside `src/data/technologies.json` (icon is a string name). */
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

/** Shape used inside the app (icon is a real React Icons component). */
export interface Technology extends Omit<TechnologyJson, "icon"> {
  icon: IconType;
}
