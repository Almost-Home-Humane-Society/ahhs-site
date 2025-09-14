export type ListItem = {
  id: string;
  name: string;
  species: 'cat' | 'dog' | 'other';
  sex: 'male' | 'female';
  ageYears: number;
  ageMonths: number;
  imageUrl: string;
  primaryBreed: string;
  secondaryBreed: string;
  fixed: 'spayed' | 'neutered' | 'unknown';
  onHold: boolean;
  stage: string;
  ageGroup: string;
  featured: boolean;
  weight: number;
}