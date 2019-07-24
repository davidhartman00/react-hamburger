import React from 'react';

import style from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
<ul className={style.NavigationItems}>
    <NavigationItem />
</ul>
)

export default navigationItems