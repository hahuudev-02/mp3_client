import React from 'react';
import clsx from 'clsx';
import style from './Header.module.scss';

import { FaSearch } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'



export default function Header() {
  return (
    <div className={clsx(style.Header)}>
        <div className={clsx(style.HeaderBtn)}>
          <i className={clsx(style.HeaderBtnLeft, 'icon')}><BsArrowLeft /></i>
          <i className={clsx(style.HeaderBtnRight, 'icon')}><BsArrowRight /></i>
        </div>

        <div className={clsx(style.HeaderSearch, 'a-flex mx-8')}>
          <i className={clsx('icon mt-2')}> <FaSearch /> </i>
          <input type="text" className={clsx(style.HeaderSearchIcon, 'mx-8')} placeholder="Search for aritis, songs..."/>
        </div>  
    </div>
  )
}
