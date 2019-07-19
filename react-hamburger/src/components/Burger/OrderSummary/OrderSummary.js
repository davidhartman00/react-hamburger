import React from "react";

import Aux from "../../../hoc/Aux";

const orderSummary = props => {
    const ingredientsSummary = props.ingredients
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicision burger with the following ingredients:</p>
      <ul>

      </ul>
    </Aux>
  );
};

export default orderSummary;
