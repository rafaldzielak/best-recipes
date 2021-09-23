import "./RecipeModal.scss";
import React, { useRef } from "react";
import FadeIn from "react-fade-in";
import { VscChromeClose } from "react-icons/vsc";
import { Recipe } from "../interfaces/recipe";
import RecipeItem from "../recipe-list/RecipeItem";

interface SingleArticleModalProps {
  recipe: Recipe;
  index: number;
  closeAction?: () => void;
  favourites: Recipe[];
  setFavourites: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

const checkIfIsFav = (recipe: Recipe, favourites: Recipe[]) => {
  for (let favourite of favourites) {
    if (favourite.uri === recipe.uri) return true;
  }
  return false;
};

const SingleArticleModal: React.FC<SingleArticleModalProps> = ({
  recipe,
  closeAction,
  favourites,
  setFavourites,
}) => {
  const articleRef = useRef<HTMLDivElement>(null);

  const ToggleFavourite = () => {
    const isFavourite = checkIfIsFav(recipe, favourites);
    if (!isFavourite) {
      return (
        <span className='pill favourites' onClick={() => setFavourites([...favourites, recipe])}>
          Add to favourites
        </span>
      );
    }
    return (
      <span
        className='pill favourites'
        onClick={() => setFavourites(favourites.filter((favourite) => favourite.uri !== recipe.uri))}>
        Remove from favourites
      </span>
    );
  };

  return (
    <FadeIn transitionDuration={300} className='modal'>
      {recipe && (
        <article ref={articleRef}>
          <p className='close-modal'>
            <ToggleFavourite />
            <VscChromeClose onClick={closeAction} className='icon' title='close-icon' />
          </p>
          <div>
            <RecipeItem recipe={recipe} extended />
            <div className='extended-info'>
              <div className='ingredients'>
                <h3>Ingredients</h3>
                <ul className='ingredients'>
                  {recipe.ingredients.slice(0, 6).map((ingredient) => (
                    <li className='pill'>
                      {ingredient.text} ({ingredient.quantity} {ingredient.measure})
                    </li>
                  ))}
                </ul>
              </div>
              <div className='digest'>
                <h3>Nutrients</h3>
                <ul className='digest-info'>
                  {recipe.digest?.map((nutrient) => (
                    <li className='pill'>
                      <span>{nutrient.label}</span>: ({nutrient.total.toFixed(2)}
                      {nutrient.unit && ` ${nutrient.unit}`})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      )}
    </FadeIn>
  );
};

export default SingleArticleModal;
