
import { Leader } from "../types/leader";

export const renaissanceLeaders: Leader[] = [
  {
    id: 5,
    name: "Queen Elizabeth I",
    era: "Renaissance",
    country: "England",
    years: "1533 - 1603",
    image: "/leaders/elizabeth.jpg",
    bio: "Oversaw a period of English history marked by economic prosperity, the flourishing of arts, and the defeat of the Spanish Armada.",
    stats: {
      military: 75,
      diplomacy: 90,
      culture: 92,
      economy: 85,
      science: 65
    }
  },
  {
    id: 14,
    name: "Tokugawa Ieyasu",
    era: "Renaissance",
    country: "Japan",
    years: "1543 - 1616",
    image: "/leaders/tokugawa.jpg",
    bio: "Founder and first shogun of the Tokugawa shogunate, which effectively ruled Japan from 1600 until the Meiji Restoration in 1868.",
    stats: {
      military: 86,
      diplomacy: 82,
      culture: 75,
      economy: 80,
      science: 60
    }
  }
];
