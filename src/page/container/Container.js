import React from 'react';
import clsx from 'clsx';

import style from './Container.module.scss';
import BoardMusic from 'compoments/BoardMusic/BoardMusic';

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Container() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={clsx(style.ContainerHome, 'Container')}>
            <div className={clsx(style.header, 'flex-item-center')}>
                <Slider {...settings} className={clsx(style.Slider)}>
                    <div>
                        <img src="https://picsum.photos/500/200" alt="" className="" />
                    </div>
                    <div>
                        <img src="https://picsum.photos/500/200" alt="" className="" />
                    </div>
                    <div>
                        <img src="https://picsum.photos/500/200" alt="" className="" />
                    </div>
                </Slider>
            </div>

            <div className={clsx(style.content, 'mt-4')}>
            </div>

            <BoardMusic />
        </div>
    );
}
