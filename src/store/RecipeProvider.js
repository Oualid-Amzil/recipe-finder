import React, { useState } from "react";

import RecipeContext from "./recipe-context";

const RecipeProvider = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [recipe, setRecipe] = useState();

  const addRecipeHandler = (recipe) => {
    setRecipe(recipe);
    setIsShown(true);
  };

  const recipeShowHandler = () => {
    setIsShown(true);
    console.log(recipe);
    console.log(isShown);
  };

  const recipeHideHandler = () => {
    setIsShown(false);
  };

  const defaultValue = {
    recipe: recipe,
    isShown: isShown,
    showRecipe: recipeShowHandler,
    hideRecipe: recipeHideHandler,
    addRecipe: addRecipeHandler,
  };

  return (
    <RecipeContext.Provider value={defaultValue}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
