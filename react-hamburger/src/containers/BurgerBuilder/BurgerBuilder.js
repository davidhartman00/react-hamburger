import React, { Component } from 'react'

import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger'
import BuilderControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.4
}

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {...}
    // }
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 2,
            meat: 1
        },
        totalPrice: 4
    }




    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuilderControls  />
            </Aux>
        )
    }
}

export default BurgerBuilder