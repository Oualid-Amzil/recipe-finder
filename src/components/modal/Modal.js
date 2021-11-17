import React, { useContext } from "react";
import ReactDOM from "react-dom";

import RecipeContext from "../../store/recipe-context";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const recipeCtx = useContext(RecipeContext);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={recipeCtx.hideRecipe} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
