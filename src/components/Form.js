import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getRecipe}>
      <input type="text" name="recipeName" />
      <button name="search-btn">Search</button>
    </form>
  );
};

export default Form;
