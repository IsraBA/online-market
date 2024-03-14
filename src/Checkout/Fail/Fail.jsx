import React from 'react'
import styles from './Fail.module.css'
import checkoutFail from '../../../public/checkout fail.png'
import { useNavigate } from 'react-router-dom';

export default function Fail() {

  const nav = useNavigate();

  return (
    <div className={styles.fail}>
    <div className={styles.titleImg}>
      <span>משהו לא הצליח, עדיף לנסות שוב מאוחר יותר</span>
      <img src={checkoutFail} alt="checkoutFail" />
    </div>
    <button onClick={() => nav('/categories')}><div></div>קחו אותי לדף הבית</button>
  </div>
  )
}
