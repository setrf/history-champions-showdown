
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
    },
    achievements: [
      "Defeated the Spanish Armada",
      "Established the Church of England",
      "Patronized the arts and literature"
    ]
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
    },
    achievements: [
      "Unified Japan after the Sengoku period",
      "Established the Tokugawa shogunate",
      "Created a stable political system that lasted over 250 years"
    ]
  },
  {
    id: 21,
    name: "Lorenzo de Medici",
    era: "Renaissance",
    country: "Florence",
    years: "1449 - 1492",
    image: "/leaders/lorenzo.jpg",
    bio: "Ruler of the Florentine Republic during the Italian Renaissance, statesman, and patron of the arts who greatly influenced cultural and political development.",
    stats: {
      military: 60,
      diplomacy: 92,
      culture: 95,
      economy: 88,
      science: 78
    },
    achievements: [
      "Primary patron of Renaissance art in Florence",
      "Maintained peace in Italy through diplomatic balance of power",
      "Commissioned works by Michelangelo, Botticelli, and da Vinci"
    ]
  }
];
