import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import style from './Footer.module.scss';

import { useStore, action } from 'store';
import { BsPlayCircleFill, BsPauseCircleFill, BsArrowRepeat, BsVolumeUp, BsMusicNoteBeamed } from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext, BiVolumeMute, BiHeart } from 'react-icons/bi';
import { IoShuffleOutline } from 'react-icons/io5';
import { AiOutlineExpandAlt } from 'react-icons/ai';

const formatTimes = (number) => {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

export default function Footer() {
    const [play, setPlay] = useState(true);
    const [mute, setMute] = useState(true);

    const [input, setInput] = useState(0);
    const [time, setTime] = useState(`00:00`);

    const audio = useRef();
    const inputElement = useRef();
    const [duration, setDuration] = useState(0);

    const [state, dispatch, dataSongs] = useStore();

    // time song
    useEffect(() => {
        const timeProgress = () => {
            setDuration(formatTimes(audio.current.duration));

            setTime(formatTimes(audio.current.currentTime));
            setInput(Math.floor((audio.current.currentTime * 100) / audio.current.duration));
        };
        audio.current.addEventListener('timeupdate', timeProgress);
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
        audio.current.play();
        setPlay(false);
        audio.current.currentTime = (e.target.value * audio.current.duration) / 100;
    };

    const handlePlay = () => {
        dispatch(action.playMusic(audio.current));
        setPlay(!play);
        play ? audio.current.play() : audio.current.pause();
    };

    const handleMute = () => {
        setMute(!mute);
    };

    const PrevSong = () => {

    }

    const NextSong = () => {
        dispatch(action.NextMusic(state.songId));
    }
    return (
        <div className={clsx(style.Footer, 'flex-item-center flex-column')}>
            <div className={clsx(style.Control)}>
                <div className={clsx(style.media, 'flex-item-center')}>
                    <i className={clsx(style.icon)}>
                        <BiHeart />
                    </i>
                    <i className={clsx(style.icon, 'mx-8')}>
                        <BsMusicNoteBeamed />
                    </i>
                    <i className={clsx('icon')}>
                        <AiOutlineExpandAlt />
                    </i>
                </div>

                <div className={clsx(style.options, 'flex-item-center')}>
                    <i className={clsx('icon')}>
                        <IoShuffleOutline />
                    </i>
                    <i className={clsx(style.icon, 'ml-6')} onClick={() => PrevSong()}>
                        <BiSkipPrevious />
                    </i>
                    <i className={clsx(style.iconPlay, style.icon)} onClick={handlePlay}>
                        {play ? <BsPlayCircleFill /> : <BsPauseCircleFill />}
                    </i>
                    <i className={clsx(style.icon, 'mr-6')} onClick={() => NextSong()}>
                        <BiSkipNext />
                    </i>
                    <i className={clsx('icon')}>
                        <BsArrowRepeat />
                    </i>
                </div>

                <div className={clsx(style.volume, 'flex-item-center ml-8')}>
                    <i className={clsx('icon')} onClick={handleMute}>
                        {mute ? <BsVolumeUp /> : <BiVolumeMute />}
                    </i>
                    <input id={clsx(style.range)} type="range" min="0" max="100" step="1" start="0" />
                </div>
            </div>

            <div className={clsx(style.SeekBar, 'flex-item-center')}>
                <span className={clsx(style.time, style.trackTime, 'mr-6')}>{time}</span>
                <input
                    id={clsx(style.range)}
                    type="range"
                    value={input}
                    onChange={(e) => handleChange(e)}
                    min="0"
                    max="100"
                    step="1"
                    start="0"
                    ref={inputElement}
                />
                <audio src={state.musicUrl} ref={audio} />
                <span className={clsx(style.time, style.durationTime, 'ml-6')}>{duration}</span>
            </div>
        </div>
    );
}
