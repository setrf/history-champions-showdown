
import { Leader } from "../types/leader";

export const enlightenmentLeaders: Leader[] = [
  {
    id: 7,
    name: "Catherine the Great",
    era: "Enlightenment",
    country: "Russia",
    years: "1729 - 1796",
    image: "/leaders/catherine.jpg",
    bio: "Ruled the Russian Empire for more than three decades, expanding its borders and modernizing its policies.",
    stats: {
      military: 70,
      diplomacy: 85,
      culture: 90,
      economy: 80,
      science: 75
    },
    achievements: [
      "Expanded Russian territory and modernized administration",
      "Corresponded with Enlightenment philosophers",
      "Established the Smolny Institute for Noble Girls"
    ]
  },
  {
    id: 20,
    name: "Maria Theresa",
    era: "Enlightenment",
    country: "Austria",
    years: "1717 - 1780",
    image: "/leaders/maria_theresa.jpg",
    bio: "The only female ruler of the Habsburg dominions and the last of the House of Habsburg, implemented significant reforms in education, medicine and civil rights.",
    stats: {
      military: 70,
      diplomacy: 88,
      culture: 85,
      economy: 82,
      science: 75
    },
    achievements: [
      "Restructured the Habsburg monarchy",
      "Instituted comprehensive educational reforms",
      "Modernized the Austrian military system"
    ]
  },
  {
    id: 22,
    name: "Frederick the Great",
    era: "Enlightenment",
    country: "Prussia",
    years: "1712 - 1786",
    image: "/leaders/frederick.jpg",
    bio: "King of Prussia who transformed Prussia into a major European power through his military victories and domestic reforms.",
    stats: {
      military: 94,
      diplomacy: 85,
      culture: 80,
      economy: 78,
      science: 85
    },
    achievements: [
      "Transformed Prussia into a major European power",
      "Patron of the arts, music, and Enlightenment ideas",
      "Military genius who modernized Prussian tactics"
    ]
  }
];
