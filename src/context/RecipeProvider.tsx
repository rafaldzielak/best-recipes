import axios from "axios";
import React, { useState, useCallback } from "react";
import { Recipe } from "../components/interfaces/recipe";
import UserContext, { contextDefaultValues, RecipeContextState } from "./RecipeContext";

const UserProvider: React.FC = ({ children }) => {
  const [recipeState, setRecipesState] = useState<RecipeContextState>(contextDefaultValues);

  const setError = useCallback((error: string | null) => {
    setRecipesState((prevState) => ({ ...prevState, error }));
  }, []);

  const setRecipe = (recipe: Recipe | null) => {
    setRecipesState((prevState) => ({ ...prevState, recipe }));
  };

  const getRecipes = useCallback(
    async (keyword) => {
      setError(null);
      const fetchUrl =
        recipeState.keyword === keyword
          ? recipeState.nextPage
          : `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=df53c267&app_key=bd80595496a524a833554462aa41a04c`;
      try {
        const { data } = await axios.get(fetchUrl);
        const recipes = data.hits.map((recipeObj: any) => recipeObj.recipe);
        if (recipes.length === 0) setError("No results for given keyword");
        setRecipesState((prevState) => ({
          ...prevState,
          recipes: recipeState.keyword === keyword ? [...prevState.recipes, ...recipes] : recipes,
          loading: false,
          nextPage: data._links?.next?.href,
          keyword,
          resultsNumber: data.count,
        }));
      } catch (error) {
        setError("error");
      }
    },
    [recipeState.keyword, recipeState.nextPage, setError]
  );

  return (
    <UserContext.Provider value={{ ...recipeState, setError, setRecipe, getRecipes }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
