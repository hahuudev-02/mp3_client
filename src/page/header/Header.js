import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

import styles from './Header.module.scss';
import TippyWrapper from 'compoments/TippyWrapper/TippyWrapper.js';

import { FaSearch } from 'react-icons/fa';
import { BiLoader } from 'react-icons/bi';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';

export default function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [sowResults, setSowResults] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const inputSearch = useRef();

    useEffect(() => {
        if(!searchValue.trim() ) return;

        setLoading(true)
        setTimeout(() => {
            setSearchResults([1,2,3])
            setLoading(false)
            setSowResults(true)
        }, 3000)
    }, [searchValue]);

    return (
        <div className={clsx(styles.Header, 'a-flex')}>
            <div className={clsx(styles.HeaderBtn)}>
                <i className={clsx(styles.HeaderBtnLeft, 'icon')}>
                    <BsArrowLeft />
                </i>
                <i className={clsx(styles.HeaderBtnRight, 'icon')}>
                    <BsArrowRight />
                </i>
            </div>

            <div className={clsx(styles.HeaderSearch)}>
                <div className={clsx(styles.wraper, 'a-flex mx-2')}>
                    <i className={clsx('icon mt-0.5 mx')}>
                        <FaSearch />
                    </i>
                    <input
                        ref={inputSearch}
                        type="text"
                        value={searchValue}
                        className={clsx(styles.HeaderSearchInput, 'mx-2')}
                        placeholder="Search for aritis, songs..."
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className="">
                        {loading && (
                            <i className={clsx(styles.iconLoad)}>
                                <BiLoader />
                            </i>
                        )}

                        {!!searchValue && !loading && (
                            <i className={clsx(styles.iconClose, 'icon mx mt-0.5')}>
                                <IoIosCloseCircle
                                    onClick={() => {
                                        setSearchValue('');
                                        inputSearch.current.focus();
                                    }}
                                />
                            </i>
                        )}
                    </div>
                </div>

                <div className={clsx(styles.SearchResults)}>{sowResults && <TippyWrapper results = {searchResults} />}</div>
            </div>
        </div>
    );
}
