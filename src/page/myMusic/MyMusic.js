import React from 'react';
import clsx from 'clsx';
import styles from './MyMusic.module.scss';

import { useStore, action } from 'store';

import { AiOutlineExpandAlt } from 'react-icons/ai';
import BoardMusic from 'compoments/BoardMusic/BoardMusic';

import SongMusic from 'compoments/Song/Song';

export default function MyMusic() {
    const [state, dispatch, dataSongs] = useStore();

    const handleSong = (song) => {
        const musicUrl= song.musicUrl
        const nameSong= song.nameSong
        dispatch(action.playMusic({musicUrl, nameSong}))
    };
    return (
        <div className={clsx('Container', styles.MyMusic)}>
            <BoardMusic title="PlayLists" />

            <div className={clsx(styles.playlist)}>
                <div className={clsx(styles.intro, 'flex-item-betwen')}>
                    <span className={clsx(styles.title)}>My PlayList</span>
                    <span className={clsx(styles.btn, 'flex-item-center')}>
                        Show all
                        <i className={clsx(styles.icon, 'ml-4')}>
                            {' '}
                            <AiOutlineExpandAlt />{' '}
                        </i>
                    </span>
                </div>

                <div className={clsx(styles.content)}>
                    <SongMusic number="#" name="MUSIC" time="TIME" title />

                    {dataSongs.musics.songs.map((song, index) => (
                        <SongMusic key={song.id} number={index + 1} name={song.nameSong} artist={song.author} time="05:20" img={song.imgSongs} onClick={() => handleSong(song)}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
