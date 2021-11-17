import React, { useContext } from "react";

import RecipeContext from "../../store/recipe-context";
import classes from "./Recipe.module.css";

// ("background:url(https://d2gk7xgygi98cy.cloudfront.net/6267-3-large.jpg) no-repeat 50% 50%; background-size:cover; height: 150px");

const Recipe = (props) => {
  const recipeCtx = useContext(RecipeContext);

  let ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (recipeCtx.recipe[`strIngredient${i}`]) {
      ingredients.push(
        `${recipeCtx.recipe[`strIngredient${i}`]} - ${
          recipeCtx.recipe[`strMeasure${i}`]
        }`
      );
    } else {
      break;
    }
  }

  return (
    <div className={classes.wrapper}>
      <span className={classes.exit} onClick={recipeCtx.hideRecipe}>
        X
      </span>
      <div className={classes["recipe-container"]}>
        <h2>{recipeCtx.recipe.strMeal}</h2>
        <div className={classes.ingredients}>
          <h3>Ingredients:</h3>
          <ul className={classes["recipe-card__ingredients"]}>
            {ingredients.map((item) => {
              return <li key={ingredients.indexOf(item)}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={classes.method}>
          <h3>Method:</h3>
          <p>{recipeCtx.recipe.strInstructions}</p>
        </div>
      </div>
      <div className={classes.image}>
        <div className={classes["image-container"]}>
          <img src={recipeCtx.recipe.strMealThumb} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
