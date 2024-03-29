import React from "react";

import style from "./backdrop.module.css";

const backdrop = props =>
  props.show ? (
    <div className={style.Backdrop} onClick={props.clicked} />
  ) : null;

export default backdrop;
