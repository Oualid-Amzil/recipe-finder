import React, { useState, useContext } from "react";

import Form from "./components/form/Form";
import Card from "./components/card/Card";
import Recipe from "./components/recipe/Recipe";
import RecipeContext from "./store/recipe-context";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const recipeCtx = useContext(RecipeContext);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
      }
      console.log(recipes);

      setInputValue("");
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="app-container">
      {recipeCtx.isShown && <Recipe />}
      {!recipeCtx.isShown && (
        <React.Fragment>
          <h1>Search for best recipe</h1>
          <Form
            value={inputValue}
            onChangeHandler={inputChangeHandler}
            onSubmitHandler={submitHandler}
          />
          {!isLoading && recipes.length > 0 && <Card recipes={recipes} />}
          {!isLoading && recipes.length === 0 && <h2>Found no recipes.</h2>}
          {isLoading && <h2>Loading...</h2>}
          {!isLoading && error && <h2>{error}</h2>}
        </React.Fragment>
      )}
    </div>
  );
};

export default App;