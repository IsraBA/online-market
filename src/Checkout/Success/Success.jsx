import React from 'react'
import styles from './Success.module.css'
import checkout from '../../../public/checkout.png'
import { useNavigate } from 'react-router-dom'

export default function Success() {

  const nav = useNavigate();

  return (
    <div className={styles.success}>
      <div className={styles.titleImg}>
        <span>ההזמנה בוצעה בהצלחה!</span>
        <img src={checkout} alt="checkout" />
      </div>
      <button onClick={() => nav('/categories')}><div></div>קחו אותי לדף הבית</button>
    </div>
  )
}
