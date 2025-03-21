
import { Leader } from "../types/leader";
import { ancientLeaders } from "./ancient";
import { medievalLeaders } from "./medieval";
import { renaissanceLeaders } from "./renaissance";
import { enlightenmentLeaders } from "./enlightenment";
import { modernLeaders } from "./modern";

// Combine all leaders into a single array
export const leaders: Leader[] = [
  ...ancientLeaders,
  ...medievalLeaders,
  ...renaissanceLeaders,
  ...enlightenmentLeaders,
  ...modernLeaders
];

// Export individual era collections
export {
  ancientLeaders,
  medievalLeaders,
  renaissanceLeaders,
  enlightenmentLeaders,
  modernLeaders
};

// Export the Leader type
export type { Leader };
