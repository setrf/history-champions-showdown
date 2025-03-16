
export interface Leader {
  id: number;
  name: string;
  era: string;
  country: string;
  years: string;
  image: string;
  bio: string;
  stats: {
    military: number;
    diplomacy: number;
    culture: number;
    economy: number;
    science: number;
  }
}

export const leaders: Leader[] = [
  {
    id: 1,
    name: "Alexander the Great",
    era: "Ancient",
    country: "Macedonia",
    years: "356 BC - 323 BC",
    image: "https://images.unsplash.com/photo-1608416026650-7809228eba53?q=80&w=500&auto=format&fit=crop",
    bio: "Created one of history's largest empires by the age of 30, spreading Greek culture across three continents.",
    stats: {
      military: 98,
      diplomacy: 75,
      culture: 85,
      economy: 70,
      science: 60
    }
  },
  {
    id: 2,
    name: "Cleopatra VII",
    era: "Ancient",
    country: "Egypt",
    years: "69 BC - 30 BC",
    image: "https://images.unsplash.com/photo-1669751553048-d2c79de7a28c?q=80&w=500&auto=format&fit=crop",
    bio: "The last active ruler of the Ptolemaic Kingdom of Egypt, known for her intelligence, political acumen and alliances with Roman leaders.",
    stats: {
      military: 60,
      diplomacy: 95,
      culture: 88,
      economy: 78,
      science: 70
    }
  },
  {
    id: 3,
    name: "Julius Caesar",
    era: "Ancient",
    country: "Rome",
    years: "100 BC - 44 BC",
    image: "https://images.unsplash.com/photo-1602003253632-b09b69deabaf?q=80&w=500&auto=format&fit=crop",
    bio: "Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.",
    stats: {
      military: 92,
      diplomacy: 80,
      culture: 75,
      economy: 65,
      science: 60
    }
  },
  {
    id: 4,
    name: "Genghis Khan",
    era: "Medieval",
    country: "Mongolia",
    years: "1162 - 1227",
    image: "https://images.unsplash.com/photo-1624091960861-64ea3a2fc8b6?q=80&w=500&auto=format&fit=crop",
    bio: "Founder and Great Khan of the Mongol Empire, which became the largest contiguous empire in history after his death.",
    stats: {
      military: 99,
      diplomacy: 70,
      culture: 60,
      economy: 85,
      science: 50
    }
  },
  {
    id: 5,
    name: "Queen Elizabeth I",
    era: "Renaissance",
    country: "England",
    years: "1533 - 1603",
    image: "https://images.unsplash.com/photo-1590598016917-b6ee01658075?q=80&w=500&auto=format&fit=crop",
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
    id: 6,
    name: "Napoleon Bonaparte",
    era: "Modern",
    country: "France",
    years: "1769 - 1821",
    image: "https://images.unsplash.com/photo-1604975999044-188783d54fb3?q=80&w=500&auto=format&fit=crop",
    bio: "Military and political leader who rose to prominence during the French Revolution and led successful campaigns during the Revolutionary Wars.",
    stats: {
      military: 96,
      diplomacy: 80,
      culture: 70,
      economy: 75,
      science: 85
    }
  },
  {
    id: 7,
    name: "Catherine the Great",
    era: "Enlightenment",
    country: "Russia",
    years: "1729 - 1796",
    image: "https://images.unsplash.com/photo-1600095178718-efa98dd9962f?q=80&w=500&auto=format&fit=crop",
    bio: "Ruled the Russian Empire for more than three decades, expanding its borders and modernizing its policies.",
    stats: {
      military: 70,
      diplomacy: 85,
      culture: 90,
      economy: 80,
      science: 75
    }
  },
  {
    id: 8,
    name: "Abraham Lincoln",
    era: "Modern",
    country: "United States",
    years: "1809 - 1865",
    image: "https://images.unsplash.com/photo-1567604437110-4b666f58adad?q=80&w=500&auto=format&fit=crop",
    bio: "Led the United States through the Civil War, preserved the Union, abolished slavery, and modernized the economy.",
    stats: {
      military: 65,
      diplomacy: 90,
      culture: 75,
      economy: 80,
      science: 65
    }
  },
  {
    id: 9,
    name: "Empress Wu Zetian",
    era: "Medieval",
    country: "China",
    years: "624 - 705",
    image: "https://images.unsplash.com/photo-1516628337751-ddff6d7aa8df?q=80&w=500&auto=format&fit=crop",
    bio: "The only woman in Chinese history to assume the title of Empress Regnant, ruled during the Tang dynasty.",
    stats: {
      military: 65,
      diplomacy: 80,
      culture: 85,
      economy: 90,
      science: 75
    }
  },
  {
    id: 10,
    name: "Mahatma Gandhi",
    era: "Modern",
    country: "India",
    years: "1869 - 1948",
    image: "https://images.unsplash.com/photo-1571599554694-2e6a9133b684?q=80&w=500&auto=format&fit=crop",
    bio: "Led India to independence from British rule through nonviolent civil disobedience and inspired movements for civil rights worldwide.",
    stats: {
      military: 10,
      diplomacy: 99,
      culture: 90,
      economy: 60,
      science: 70
    }
  }
];
