import React from 'react';
import clsx from 'clsx';
import styles from './TippyWrapper.module.scss';

import { FaSearch } from 'react-icons/fa';

export default function PopSearch(props) {
    return (
        <div className={clsx(styles.searchResults)}>
            <ul className={clsx(styles.TippyWrapper, 'flex flex-column')}>
                <li className={clsx(styles.TippyWrapperItem, 'flex-item-center')}>
                    <i className={clsx(styles.icon)}>
                        <FaSearch />
                    </i>

                    <span>Sợ lắm 2</span>
                </li>
            </ul>

            <ul className={clsx(styles.searchResults)}>
                { props.results.map((index) => (
                    <li className={clsx(styles.searchResultsItem, 'flex items-center')} key = {index}>
                        <img
                            src="	https://cf.shopee.vn/file/fed0c154b9017660933d1dea0b6867a5"
                            alt=""
                            className={clsx(styles.img)}
                        />
                        <div className={clsx('flex flex-column ml-3')}>
                            <h3 className="">Sợ Lắm 2</h3>
                            <span className="">Sợ Lắm 2</span>
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
    );
}
