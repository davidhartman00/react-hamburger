import React from "react";

import style from "./Modal.css"

const modal = props => <div className={style.Modal}>{props.children}</div>;

export default modal;
