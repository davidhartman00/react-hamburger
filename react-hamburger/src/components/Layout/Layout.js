import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import style from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={style.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
