import React, { useContext } from "react";
import { Recipe } from "../interfaces/recipe";
import RecipeContext from "../../context/RecipeContext";
import "./RecipeList.scss";

interface RecipeItemProps {
  recipe: Recipe;
  extended?: boolean;
}

const getPillColor = (calories: number) => {
  if (calories < 800) return "pill-success";
  if (calories < 1200) return "pill-info";
  return "pill-danger";
};

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe, extended }) => {
  const { setRecipe } = useContext(RecipeContext);

  return (
    <li key={recipe.uri} className='recipe-item' onClick={() => setRecipe(recipe)}>
      <img src={recipe.image} alt='' />{" "}
      <div className='label'>
        <span className='label-item'>{recipe.label}</span>
        <span className={`pill ${getPillColor(recipe.calories)}`}>{`${recipe.calories.toFixed(
          0
        )} kcal`}</span>
      </div>
      <div className='health'>
        <div className='health-label'>Health</div>
        <div className='health-items'>
          {recipe.healthLabels.slice(0, 6).map((healthLabel: string) => (
            <div key={healthLabel} className='pill'>
              {healthLabel}
            </div>
          ))}
        </div>
      </div>
      {recipe.dietLabels.length > 0 && (
        <div className='diet'>
          <div className='diet-label'>Diet</div>
          <div className='diet-items'>
            {recipe.dietLabels.slice(0, 6).map((dietLabel: string) => (
              <div key={dietLabel} className='pill'>
                {dietLabel}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default RecipeItem;
