import React from "react";

const button = props => (
  <button className={props.classname} onClick={props.clicked}>
    {props.children}
  </button>
);

export default button;
