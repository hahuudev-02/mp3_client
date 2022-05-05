import React from 'react'
import clsx from 'clsx';
import { Link } from 'react-router-dom'
import style from './TabBar.module.scss'

export default function TabBar() {
  return (
    <div className = {clsx(style.TabBar)}>
        <div className={clsx(style.TabBarHeader)}>
            <Link to="./login" className={clsx(style.login)}>Đăng nhập</Link>
        </div>
    </div>
  )
}
