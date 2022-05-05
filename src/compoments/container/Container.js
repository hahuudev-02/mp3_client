import React from 'react';
import clsx from 'clsx';

import style from "./Container.module.scss"
import BoardMusic from "../BoardMusic/BoardMusic"


export default function Container() {
  
  return (
    <div className= {clsx(style.ContainerHome, 'Container')}>
      <div className={clsx(style.header)}>

      </div>

      <BoardMusic />
    </div>
  )
}
