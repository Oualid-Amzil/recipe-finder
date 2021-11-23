import React, { useState, useContext } from "react";

import axios from "axios";
import Form from "./components/form/Form";
import Card from "./components/card/Card";
import Recipe from "./components/recipe/Recipe";
import RecipeContext from "./store/recipe-context";
import Loader from "./UI/Loader";
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
      if (inputValue.trim().length > 0) {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
        );

        if (response.data.meals) {
          setRecipes(response.data.meals);
        } else {
          setRecipes([]);
        }
        console.log(recipes);
        setInputValue("");
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = <h2>Found no recipes.</h2>;

  if (recipes.length > 0) {
    content = <Card recipes={recipes} />;
  }

  if (error) {
    content = <h2 style={{ color: "red" }}>{error}</h2>;
  }

  if (isLoading) {
    content = <Loader />;
  }

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
          {content}
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
