import React, { PureComponent } from 'react'
import styles from './index.module.scss'
import Login from '@V/login/components/login/index'

export default function index() {

  return (
    <div className={styles.bg}>
      <Login/>
    </div>
  )
}
