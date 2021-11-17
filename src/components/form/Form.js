import React from "react";

import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={props.onSubmitHandler}>
        <input
          value={props.value}
          onChange={props.onChangeHandler}
          className={classes["search-bar"]}
          type="text"
        />
        <button className={classes["search-button"]} type="submit">
          search
        </button>
      </form>
    </div>
  );
};

export default Form;
