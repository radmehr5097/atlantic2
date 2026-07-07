export interface Product {
  id: string;
  name: string;
  category: 'rejuvenator' | 'skin_care' | 'hair_care' | 'perfume' | 'pack';
  categoryName: string;
  shortDesc: string;
  description: string;
  ingredients: string[];
  modernScience: string;
  traditionalScience: string;
  islamicScience: string;
  usage: string;
  image: string;
  tag: string;
  price?: string;
}

export interface Perfume {
  id: string;
  name: string;
  desc: string;
  cosmicProperties: string[];
  baseIngredients: string[];
  specificEssence: string;
  usageMethod: string;
  startDay: string;
  volume: string;
  image: string;
}

export interface TreatmentPack {
  id: string;
  name: string;
  desc: string;
  diseaseInfo: string;
  contents: string[];
  sessions: string;
  icon: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  text: string;
  rating: number;
  date: string;
}
