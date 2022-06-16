import React from 'react';
import clsx from 'clsx';
import styles from './Media.module.scss';

import { useStore } from 'store';

export default function Media() {

    const [state, dispatch, dataSongs] = useStore();
    console.log(state);
    return (
        <div className={clsx(styles.Media, 'flex-item-center flex-column')}>
            <div className={clsx(styles.header, 'flex-item-center')}>
                <img src={'hi'} alt="" className={clsx(styles.imgae)} />
                <div className={clsx(styles.info, 'ml-10')}>
                    <p className={clsx(styles.nameSong)}>{state.nameSong}</p>
                    <p className={clsx(styles.author)}>Sơn tùng mtp</p>
                </div>
            </div>

            <div className={clsx(styles.lyric)}>
                Nguyễn Hà Hữu đẹp trai thế không biết Nguyễn Hà Hữu đẹp trai thế không biết Nguyễn Hà Hữu đẹp trai thế
                không biết Nguyễn Hà Hữu đẹp trai thế không biết Nguyễn Hà Hữu đẹp trai thế không biết Nguyễn Hà Hữu đẹp
                trai thế không biết
            </div>
        </div>
    );
}
