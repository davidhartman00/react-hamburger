import React from "react";

import Aux from "../../../hoc/Aux";

const orderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients)
      .map(igKey =>{
        return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
          </li>)
      })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicision burger with th following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>Continue to checkout</p>
      <button>Cancel</button>
      <button>Continue</button>
    </Aux>
  );
};

export default orderSummary;
