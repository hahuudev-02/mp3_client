import React from 'react'
import clsx from 'clsx'
import style from './Register.module.scss'

import FormLog from '../../compoments/FormLog/FormLog'

export default function Register() {
  return (
    <div className={clsx(style.Register)}>
      <FormLog title="Đăng ký tài khoản Hữu music" link="/login" acc="Bạn đã có tài khoản" log="Đăng nhập"/>
    </div>
  )
}
