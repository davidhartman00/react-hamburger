import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import style from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const sideDrawer = props => {
    const attachedClasses = [style.SideDrawer, style.Close];
if (props.open){
    attachedClasses = [style.SideDrawer, style.Open]
}

  return (
    <Aux>
      <Backdrop show/>
      <div className={attachedClasses.join(" ")}>
        <div className={style.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
