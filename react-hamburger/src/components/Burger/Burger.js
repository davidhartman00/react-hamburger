import React from "react";

import style from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients) //pulled out the keys names into an array
    .map(igKey => {
      //loop over key titles
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        //return an array of the quantity of each key, then map over each
        return <BurgerIngredient key={igKey + i} type={igKey} />; //build an array of JSX to return
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  // console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={style.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
