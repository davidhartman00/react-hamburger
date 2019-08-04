import React from 'react'
import style from './DrawerToggle.module.css'

const drawerToggle = (props) => (
    <div onClick={props.openSideDrawer} className={style.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    )

export default drawerToggle