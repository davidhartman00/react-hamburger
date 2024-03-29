import React, { Component } from "react";

import Aux from "../Aux/Aux";
import style from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleSideDrawerHandler = () =>{
      this.setState((prevState) => {
          return { showSideDrawer: !prevState.showSideDrawer}
      })
  }
  render() {
    return (
      <Aux>
        <Toolbar openSideDrawer={this.toggleSideDrawerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={style.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
