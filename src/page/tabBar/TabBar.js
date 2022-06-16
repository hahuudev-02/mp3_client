import React, { useState, useEffect, useContext } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../store/Context/ContexUser';
import { auth } from '../../firebase/firebase';

import styles from './TabBar.module.scss';
import Media from '../media/Media';

import { BsBell } from 'react-icons/bs';
import { HiDotsCircleHorizontal } from 'react-icons/hi';

function UserItem({ title, link }) {
    return (
        <li className={clsx(styles.UserItem)}>
            <Link to={link}>{title}</Link>
        </li>
    );
}

export default function TabBar() {
    const theme = useContext(AuthContext);
    const [togle, setTogle] = useState(false);
    const [clickNotifi, setClickNotifi] = useState(false);

    useEffect(() => {


    }, [])

    return (
        <div className={clsx(styles.TabBar)}>
            <div className={clsx(styles.TabBarHeader, 'flex-item-center')}>
                {!theme ? (
                    <Link to="./login" className={clsx(styles.login)}>
                        Đăng nhập
                    </Link>
                ) : (
                    <div className={clsx(styles.header, 'flex-item-around')}>
                        <div className={clsx(styles.Notification, 'flex-item-center')}>
                            <i
                                className={clsx(styles.icon, 'icon')}
                                onClick={() => setClickNotifi(!clickNotifi) & setTogle(false)}
                            >
                                <BsBell />
                            </i>

                            {clickNotifi && (
                                <div className={clsx(styles.wraper)}>
                                    <div className={clsx(styles.header, 'flex-item-betwen')}>
                                        <h6>Thông báo</h6>

                                        <span>
                                            <i className="icon">
                                                <HiDotsCircleHorizontal />
                                            </i>
                                        </span>
                                    </div>

                                    <ul className={clsx(styles.list, 'flex-item-center flex-column')}>
                                        <li className={clsx(styles.item, 'flex-item-center')}>
                                            <img
                                                src="https://cf.shopee.vn/file/fed0c154b9017660933d1dea0b6867a5"
                                                alt=""
                                                className="img-cricle mr-12"
                                            />

                                            <div className={clsx(styles.conten, 'flex flex-column')}>
                                                <p>
                                                    Chào mừng <span>Hà Hữu</span> đã gia nhập gia đình của Hữu music,
                                                    hãy nghe nhạc vui vẻ nhé
                                                </p>
                                                <span className={clsx(styles.noti, 'mt-6')}>2 ngày trước</span>
                                            </div>
                                        </li>
                                        <li className={clsx(styles.item, 'flex-item-center')}>
                                            <img
                                                src="https://cf.shopee.vn/file/fed0c154b9017660933d1dea0b6867a5"
                                                alt=""
                                                className="img-cricle mr-12"
                                            />

                                            <div className={clsx(styles.conten, 'flex flex-column')}>
                                                <p>
                                                    Chào mừng <span>Hà Hữu</span> đã gia nhập gia đình của Hữu music,
                                                    hãy nghe nhạc vui vẻ nhé
                                                </p>
                                                <span className={clsx(styles.noti, 'mt-6')}>2 ngày trước</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className={clsx(styles.user, 'flex-item-center')}>
                            <img
                                src={theme.photoURL}
                                alt=""
                                className=""
                                onClick={() => setTogle(!togle) & setClickNotifi(false)}
                            />

                            {togle && (
                                <div className={clsx(styles.menu, 'flex-item-center flex-column')}>
                                    <div className={clsx(styles.Info, 'flex-item-center')}>
                                        <img
                                            src={theme.photoURL}
                                            alt=""
                                            className=""
                                            onClick={() => setTogle(!togle) & setClickNotifi(false)}
                                        />
                                        <div className={clsx(styles.name, 'ml-10')}>
                                            <p>{theme.displayName}</p>
                                            <p>@hahuu</p>
                                        </div>
                                    </div>

                                    <ul className={clsx(styles.UserMenu)}>
                                        <UserItem title="Trang cá nhân" link="/" />
                                    </ul>
                                    <ul className={clsx(styles.UserMenu)}>
                                        <UserItem title="Bài hát đã tải nên" link="/" />
                                        <UserItem title="Trang cá nhân" link="/" />
                                    </ul>
                                    <ul className={clsx(styles.UserMenu)}>
                                        <UserItem title="Cài đặt" link="/settings" />
                                        <div className={clsx(styles.item)} onClick={() => auth.signOut()}>
                                            Đăng xuất
                                        </div>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className={clsx(styles.TabBarConten)}>

            </div>
            
            <div className={clsx(styles.media)}>
                <Media />
            </div>
        </div>
    );
}
