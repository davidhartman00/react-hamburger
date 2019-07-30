import React from 'react';

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import style from './SideDrawer.module.css'

const sideDrawer = props => {
// .. conditionsally do some css here.

    return(
        <div className={style.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDrawer;