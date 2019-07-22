import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./BurgerIngredient.module.css";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={style.BreadBottom} />;
        break;
      case "bread-top":
        ingredient = (
          <div className={style.BreadTop}>
            <div className={style.Seeds1} />
            <div className={style.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={style.Meat} />;
        break;
      case "cheese":
        ingredient = <div className={style.Cheese} />;
        break;
      case "salad":
        ingredient = <div className={style.Salad} />;
        break;
      case "bacon":
        ingredient = <div className={style.Bacon} />;
        break;

      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredients;
