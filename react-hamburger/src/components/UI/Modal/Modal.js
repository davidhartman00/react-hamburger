import React from "react";

import style from "./Modal.module.css";

const modal = props =>(
        <div className={style.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
        }}>
            {props.children}
        </div>
    );

export default modal;
