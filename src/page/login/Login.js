import React from 'react';
import clsx from 'clsx';
import styles from './Login.module.scss';
import FormLog from '../../compoments/FormLog/FormLog'

export default function Login() {
    return (
        <div className={clsx(styles.Login, 'flex-item-center flex-column')}>
            <FormLog title="Đăng nhập vào hữu music" link="/register" acc="Bạn chưa có tài khoản" log="Đăng ký"/>
            <div className={clsx(styles.very)}></div>
        </div>
    );
}
