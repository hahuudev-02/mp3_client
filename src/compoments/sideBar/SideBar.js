import React from 'react';
import { Link} from 'react-router-dom'
import clsx from 'clsx';
import { FaForumbee, FaHome, FaChartLine, FaCompass } from "react-icons/fa";

import style from "./SideBar.module.scss"

function NavItem(props) {
  return (
    <div className={clsx(style.navItem, {[style.active] : props.active})}>
      <Link to={props.link} className={clsx(style.navItemLink, "flex-item-center")}>
        <i className={clsx(style.iconNav)}> {props.icon} </i> 
        <h3 className= {clsx(style.navItemTitle)}>{props.title}</h3>
      </Link>
    </div>
  )
}

export default function SideBar() {
  const classedLogo = clsx(style.logo, "a-flex");


  return (
    <div id={style.SideBar}>
      <Link to="./" className={classedLogo}>
        <i className={clsx(style.icon)}><FaForumbee/></i>
        <span >
          <span className={clsx(style.Title)}>Hữu</span> Music
        </span>
      </Link>

      <div className={clsx(style.navBar, "cl-flex")}>
        <NavItem title="Home" icon= {<FaHome />} link="" active/>
        <NavItem title="Trent" icon= {<FaChartLine />} link="/trent"/>
        <NavItem title="Feed" icon= {<FaCompass />} link="/feed"/>
        {/* <NavItem title="Home" icon= {} link="/"/> */}
      </div>
    </div>
  )
}
