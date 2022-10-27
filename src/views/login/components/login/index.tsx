import React, { useRef } from 'react'
import styles from './index.module.scss'

export default function Login() {
  const btn = useRef<HTMLButtonElement>(null)
  const moveToRight = () => {
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <button ref={btn} onClick={moveToRight}>13123</button>
      </div>
      <div className={styles.right}>

      </div>
    </div>
  )
}

