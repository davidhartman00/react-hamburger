import React from 'react';

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const sideDrawer = props => {
// .. conditionsally do some css here.

    return(
        <div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDrawer;