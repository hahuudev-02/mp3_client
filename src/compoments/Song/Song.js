import React from 'react';
import clsx from 'clsx';
import styles from './Song.module.scss';

import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { BsFillVolumeUpFill, BsMicFill } from 'react-icons/bs';

function SongMusic(props) {
    return (
        <div
            className={clsx(
                styles.SongMusic,
                { [styles.hoverMusic]: !props.active & !props.title },
                'flex-item-betwen mt-2',
                { [styles.activeMuisc]: props.active },
            )}
            onClick={props.onClick}
        >
            <span className={clsx(styles.number)}>
                {props.active ? (
                    <i className={clsx(styles.icon)}>
                        <BsFillVolumeUpFill />
                    </i>
                ) : (
                    <span className={clsx(styles.order)}> {props.number} </span>
                )}
            </span>
            {props.img ? (
                <img src={props.img} className={clsx(styles.img, 'mx-6')} />
            ) : (
                <span className={clsx(styles.img, 'flex-item-center mx-6')}>Img</span>
            )}

            <div className={clsx(styles.music)}>
                <span className={clsx(styles.name, 'ml-2')}>{props.name}</span>
                <span className={clsx(styles.artist, 'ml-2')}>{props.artist}</span>
            </div>

            <span className={clsx(styles.time)}>{props.time}</span>

            {props.title ? (
                <span className={clsx(styles.options)}> Options </span>
            ) : (
                <span className={clsx(styles.options, 'flex-item-around')}>
                    <i className={clsx(styles.icon)}>
                        <BsMicFill />
                    </i>
                    <i className={clsx(styles.iconDots)}>
                        <HiOutlineDotsCircleHorizontal />
                    </i>
                </span>
            )}
        </div>
    );
}

export default SongMusic;
