import { createContext } from "react";
import { Recipe } from "../components/interfaces/recipe";

export type RecipeContextState = {
  recipes: Recipe[];
  recipe: Recipe | null;
  error: string | null;
  nextPage: string;
  keyword: string;
  resultsNumber: number;
  setError: (name: string) => void;
  getRecipes: (keyword: string) => void;
  setRecipe: (recipe: Recipe | null) => void;
};

export const contextDefaultValues: RecipeContextState = {
  recipes: [],
  recipe: null,
  error: null,
  keyword: "",
  nextPage: "",
  resultsNumber: 0,
  setError: () => {},
  getRecipes: () => {},
  setRecipe: () => {},
};
const UserContext = createContext<RecipeContextState>(contextDefaultValues);

export default UserContext;
