import React from 'react';
import clsx from 'clsx';
import  {  Link, useNavigate } from "react-router-dom"
import styles from './FormLog.module.scss';

import { FcGoogle } from 'react-icons/fc'
import { BsFillPeopleFill, BsFacebook, BsGithub } from 'react-icons/bs'


import {signInWithPopup, getAuth, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { app, analytics } from '../../firebase/firebase'

export default function FormLog({ title, link, acc, log }) {
        let navigate = useNavigate();
        
        function handleLoginGoogle() {
            const auth = getAuth();
            const providerGg = new GoogleAuthProvider();

            signInWithPopup(auth, providerGg)
        }

        function handleLoginFabook() {
            const auth = getAuth();
            const providerFb = new FacebookAuthProvider();

            signInWithPopup(auth, providerFb)
        }


    return (
        <div className={clsx(styles.Container)}>
            <div className={clsx(styles.conten, 'flex-item-center flex-column')}>
                <img src="https://cf.shopee.vn/file/61c26d63319940c25d0d337c019d4cb3" alt="" className={clsx(styles.logo)} />
                
                <h1 className={clsx(styles.title)}> {title}</h1>
               
                <div className={clsx(styles.Login)}>
                    <div className={clsx(styles.button, 'flex-item-around')}>
                        <i className={clsx(styles.icon, 'icon ml-4')}> <BsFillPeopleFill /> </i>
                        <span className={clsx(styles.name)}>Sủ dụng Email/ Số điện thoại </span>
                    </div>

                    <div className={clsx(styles.button, 'flex-item-center')} onClick={handleLoginGoogle}>
                        <i className={clsx(styles.icon, 'icon ml-4')}> <FcGoogle /> </i>
                        <span className={clsx(styles.name)}>Tiếp tục với Google </span>
                    </div>      
                
                    <div className={clsx(styles.button, 'flex-item-around')} onClick={handleLoginFabook}>
                        <i className={clsx(styles.icon, 'icon ml-4')}> <BsFacebook /> </i>
                        <span className={clsx(styles.name)}>Tiếp tục với Facebook </span>
                    </div>
                
                    <div className={clsx(styles.button, 'flex-item-around')}>
                        <i className={clsx(styles.icon, 'icon ml-4')}> <BsGithub /> </i>
                        <span className={clsx(styles.name)}>Tiếp tục với Github </span>
                    </div>

                </div>

                <p className={clsx(styles.noAcc)}>
                    {acc} ?
                    <Link to={link} className={clsx(styles.link)}> {log} </Link>
                </p>
            </div>
            <div className={clsx(styles.About)}>
                <a href="" className={clsx(styles.link)}>Giới thiệu</a>
                <span className={clsx(styles.span)}> | </span>
                <a href="" className={clsx(styles.link)}>Hữu music trên Facebook</a>
                <span className={clsx(styles.span)}> | </span>
                <a href="" className={clsx(styles.link)}>Hữu music trên Youtube</a>
            </div>
        </div>
    );
}
