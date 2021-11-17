import React from "react";

import CardList from "./CardList";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.container}>
      {props.recipes.map((item) => (
        <CardList
          key={props.recipes.indexOf(item)}
          recipe={item}
          label={item.strMeal}
          img={item.strMealThumb}
          area={item.strArea}
          category={item.strCategory}
        />
      ))}
    </div>
  );
};

export default Card;
