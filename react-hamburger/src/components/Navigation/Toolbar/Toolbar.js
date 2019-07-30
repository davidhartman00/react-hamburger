import React from "react";

import style from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className={style.Toolbar}>
    <div>MENU</div>
    <Logo height='80%' />
    <NavigationItems />
  </header>
);

export default toolbar;
