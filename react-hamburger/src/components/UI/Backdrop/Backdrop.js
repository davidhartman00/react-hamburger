import React from 'react'

import style from './backdrop.module.css'

const backdrop = (props) => (
    props.show ? <div className={style.Backdrop}></div> : null
)

export default backdrop