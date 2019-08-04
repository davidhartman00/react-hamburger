import React from "react";

import style from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../Menu/Menu"

const toolbar = props => (
  <header className={style.Toolbar}>
    <Menu openSideDrawer={props.openSideDrawer} />
    <div className={style.Logo}>
      <Logo />
    </div>
    <nav className={style.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
