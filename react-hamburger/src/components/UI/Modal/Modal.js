import React, { Component } from "react";

import style from "./Modal.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }
    
    componentWillUpdate(){
        console.log('[Modal] did update');
    }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={style.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Modal;
