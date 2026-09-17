import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiDocker,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import type { Technology, TechnologyJson } from "../types/technology";
import technologiesJson from "./technologies.json";

const icons: Record<string, IconType> = {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  FaJava,
  SiTailwindcss,
  SiDocker,
};

export const technologies: Technology[] = (
  technologiesJson as TechnologyJson[]
).map((item) => ({
  ...item,
  icon: icons[item.icon],
}));
