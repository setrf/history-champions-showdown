
import { Leader } from "../types/leader";

export const medievalLeaders: Leader[] = [
  {
    id: 4,
    name: "Genghis Khan",
    era: "Medieval",
    country: "Mongolia",
    years: "1162 - 1227",
    image: "/leaders/genghis.jpg",
    bio: "Founder and Great Khan of the Mongol Empire, which became the largest contiguous empire in history after his death.",
    stats: {
      military: 99,
      diplomacy: 70,
      culture: 60,
      economy: 85,
      science: 50
    },
    achievements: [
      "Created the largest contiguous land empire in history",
      "Established the Pax Mongolica",
      "Revolutionized military tactics and organization"
    ]
  },
  {
    id: 9,
    name: "Empress Wu Zetian",
    era: "Medieval",
    country: "China",
    years: "624 - 705",
    image: "/leaders/wu.jpg",
    bio: "The only woman in Chinese history to assume the title of Empress Regnant, ruled during the Tang dynasty.",
    stats: {
      military: 65,
      diplomacy: 80,
      culture: 85,
      economy: 90,
      science: 75
    },
    achievements: [
      "Reformed the imperial examination system",
      "Expanded Chinese influence into Central Asia",
      "Promoted Buddhism throughout China"
    ]
  },
  {
    id: 11,
    name: "Charlemagne",
    era: "Medieval",
    country: "France/Germany",
    years: "742 - 814",
    image: "/leaders/charlemagne.jpg",
    bio: "King of the Franks who united much of Western Europe during the early Middle Ages and laid the foundations for modern France and Germany.",
    stats: {
      military: 88,
      diplomacy: 82,
      culture: 80,
      economy: 75,
      science: 65
    },
    achievements: [
      "Created the First European Empire since Rome",
      "Sparked the Carolingian Renaissance",
      "Reformed education and standardized currency"
    ]
  },
  {
    id: 13,
    name: "Saladin",
    era: "Medieval",
    country: "Kurdish/Egypt",
    years: "1137 - 1193",
    image: "/leaders/saladin.jpg",
    bio: "First Sultan of Egypt and Syria, famous for his leadership and recapture of Jerusalem from the Crusaders.",
    stats: {
      military: 91,
      diplomacy: 85,
      culture: 70,
      economy: 65,
      science: 60
    },
    achievements: [
      "Recaptured Jerusalem from the Crusaders",
      "United Egypt and Syria",
      "Known for chivalry and mercy toward enemies"
    ]
  },
  {
    id: 15,
    name: "Mansa Musa",
    era: "Medieval",
    country: "Mali Empire",
    years: "1280 - 1337",
    image: "/leaders/mansa_musa.jpg",
    bio: "Tenth Mansa of the Mali Empire, one of the richest people in history whose wealth disrupted economies when he traveled to Mecca.",
    stats: {
      military: 70,
      diplomacy: 85,
      culture: 80,
      economy: 99,
      science: 65
    },
    achievements: [
      "Expanded the Mali Empire to its greatest extent",
      "Built the great mosques of Timbuktu and Gao",
      "Famous pilgrimage to Mecca that showcased his immense wealth"
    ]
  }
];
