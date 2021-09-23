import { useContext } from "react";
import RecipeContext from "../../context/RecipeContext";
import "./RecipeList.scss";
import SingleRecipeModal from "../modal/RecipeModal";
import RecipeItem from "./RecipeItem";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Recipe } from "../interfaces/recipe";

const FavouriteList = () => {
  const { recipe, setRecipe } = useContext(RecipeContext);

  const [favourites, setFavourites] = useLocalStorage<Recipe[]>("fav", []);

  return (
    <>
      {recipe && (
        <SingleRecipeModal
          favourites={favourites}
          setFavourites={setFavourites}
          closeAction={() => setRecipe(null)}
          recipe={recipe}
          index={0}
        />
      )}
      <ul className='recipe-list'>
        {favourites.map((recipe) => (
          <RecipeItem key={recipe.image} recipe={recipe} />
        ))}
      </ul>
    </>
  );
};

export default FavouriteList;
