import React from "react";
import ReactDOM from "react-dom";
import RecipeProvider from "./store/RecipeProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
