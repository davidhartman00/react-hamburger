import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import style from "./SideDrawer.module.css";

const sideDrawer = props => {
  // .. conditionsally do some css here.

  return (
    <div className={style.SideDrawer}>
      <div className={style.Logo}>
        <Logo />
      </div>
      <nav className={style.DesktopOnly}>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
