import React from 'react';
import clsx from 'clsx/';
import styles from './BoardMusic.module.scss';

export default function BoradMusic(props) {

    return (
    <div className={clsx(styles.BoardMusic)}>
      <h3 className={clsx(styles.title)}>{props.title}</h3>

      <div className={clsx(styles.content, 'grid row')}>
        <div className={clsx('col l-3 m-4 c-6')}>
            <img src="https://cf.shopee.vn/file/4f56497de4605d298082cf90cddb6da8" width="100%" alt="" />
        </div>      
      </div>
    </div>
    )
}
