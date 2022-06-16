import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { FaForumbee, FaHome, FaChartLine, FaCompass, FaMusic, FaStar } from 'react-icons/fa';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { IoAddSharp } from 'react-icons/io5';
import { FiVideo } from 'react-icons/fi';

import style from './SideBar.module.scss';

function NavItem(props) {
    return (
        <div className={clsx(style.navItem, )}>
            <NavLink to={props.link} className={(nav) => clsx(style.navItemLink, 'flex-item-center', { [style.active]: nav.isActive })}>
                <i className={clsx(style.iconNav)}> {props.icon} </i>
                <h3 className={clsx(style.navItemTitle)}>{props.title}</h3>
            </NavLink>
        </div>
    );
}

export default function SideBar() {
    const classedLogo = clsx(style.logo, 'a-flex');

    return (
        <div id={style.SideBar}>
            <Link to="./" className={classedLogo}>
                <i className={clsx(style.icon)}>
                    <FaForumbee />
                </i>
                <span>
                    <span className={clsx(style.Title)}>Hữu</span> Music
                </span>
            </Link>

            <div className={clsx(style.navBar, 'cl-flex')}>
                <NavItem title="Home" icon={<FaHome />} link="" />
                <NavItem title="Trent" icon={<FaChartLine />} link="/trent" />
                <NavItem title="Feed" icon={<FaCompass />} link="/feed" />
                <NavItem title="MV" icon={<FiVideo />} link="/mv" />
            </div>

            <div className={clsx(style.navBar, style.myMusic, 'cl-flex')}>
                <h2 className={clsx(style.title)}>Your Collections</h2>
                <NavItem title="My Music" icon={<FaMusic />} link="/my-music" />
                <NavItem title="Album" icon={<FaStar />} link="/album" />
                <NavItem title="Uploat" icon={<BsFillArrowUpCircleFill />} link="/uploat" />
            </div>

            <div className={clsx(style.navBar, style.subNav, 'cl-flex')}>
                <h2 className={clsx(style.title)}>Your Collections</h2>
                <div className={clsx(style.list, 'cl-flex')}>
                    <NavItem title="My Music" icon={<FaMusic />} link="/my-music" />
                    <NavItem title="My Music" icon={<FaMusic />} link="/my-music" />
                </div>
            </div>

            <div className={clsx(style.media, 'flex-item-center')}>
                Tạo mới playlist
                <i className="icon">
                    {' '}
                    <IoAddSharp />{' '}
                </i>
            </div>
        </div>
    );
}
