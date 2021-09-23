import React, { useContext, useState } from "react";
import RecipeContext from "../../context/RecipeContext";
import "./Search.scss";
import { GrSearch } from "react-icons/gr";

const SearchComponent: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const { getRecipes, setError } = useContext(RecipeContext);

  return (
    <div className='form-placeholder'>
      <form
        className='search'
        onSubmit={(e) => {
          e.preventDefault();
          if (keyword.length > 2) getRecipes(keyword);
          else setError("Please enter at least 3 characters");
        }}>
        <input
          type='text'
          placeholder='Search for recipe'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          minLength={2}
        />
        <GrSearch
          className='search-icon'
          title='search-icon'
          onClick={() => {
            if (keyword.length > 2) getRecipes(keyword);
          }}
        />
      </form>
    </div>
  );
};

export default SearchComponent;
