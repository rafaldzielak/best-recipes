import React from "react";
import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RecipeContext from "../../context/RecipeContext";
import "./RecipeList.scss";
import ClipLoader from "react-spinners/ClipLoader";
import SingleRecipeModal from "../modal/RecipeModal";
import RecipeItem from "./RecipeItem";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Recipe } from "../interfaces/recipe";

const RecipeList = () => {
  const { recipes, getRecipes, keyword, recipe, setRecipe, error } = useContext(RecipeContext);
  const [favourites, setFavourites] = useLocalStorage<Recipe[]>("fav", []);

  return (
    <>
      <InfiniteScroll
        dataLength={recipes.length}
        next={() => getRecipes(keyword)}
        hasMore={true}
        loader={
          recipes.length ? (
            <div className='loader'>
              <ClipLoader color={"#888"} />
            </div>
          ) : (
            <></>
          )
        }>
        {recipes.length > 0 && recipe && (
          <SingleRecipeModal
            favourites={favourites}
            setFavourites={setFavourites}
            closeAction={() => setRecipe(null)}
            recipe={recipe}
            index={0}
          />
        )}
        {error && <h1 className='error'>{error}</h1>}
        <ul className='recipe-list'>{!error && recipes.map((recipe) => <RecipeItem recipe={recipe} />)}</ul>
      </InfiniteScroll>
    </>
  );
};

export default RecipeList;
