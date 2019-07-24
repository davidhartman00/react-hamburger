import React from "react";

import style from './NavigationItem.module.css'

const navigationItem = props => (
  <li className={style.NavigationItem}>
    <a href="/">A Link</a>
  </li>
);

export default navigationItem;
