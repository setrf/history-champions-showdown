
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
  };
  achievements?: string[];
}
