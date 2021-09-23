export interface Recipe {
  calories: number;
  dietLabels: string[];
  healthLabels: string[];
  ingredients: { measure: string; quantity: number; text: string }[];
  digest: { label: string; total: number; unit: string }[];
  image: string;
  label: string;
  uri: string;
}
