import React, { useContext } from "react";

import RecipeContext from "../../store/recipe-context";
import classes from "./CardList.module.css";

const CardList = (props) => {
  const recipeCtx = useContext(RecipeContext);

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <figure className={classes["card__thumb"]}>
          <img
            src={props.img}
            alt={props.label}
            className={classes["card__image"]}
          />
          <div className={classes["card__content"]}>
            <figcaption className={classes["card__caption"]}>
              <h2 className={classes["card__title"]}>{props.label}</h2>
              <p className={classes["card__snippet"]}>
                {props.area} recipe for a {props.category}.
              </p>
              <button
                className={classes["card__button"]}
                onClick={recipeCtx.addRecipe.bind(null, props.recipe)}
              >
                Read more
              </button>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default CardList;
