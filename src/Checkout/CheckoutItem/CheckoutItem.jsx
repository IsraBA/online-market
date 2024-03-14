import React from 'react'
import styles from './CheckoutItem.module.css'



export default function CheckoutItem({ image, name, count, itemTotal, price }) {
    return (
        <li className={styles.checkoutItems}>
            <span><img src={image} alt={name} /></span>
            <div className={styles.nameAndQty}>
                <div className={styles.name}>{name}</div>
                <div className={styles.count}>{count} יחידות</div>
            </div>
            <div className={styles.price}>₪{price}</div>
            <div className={styles.total}>₪{itemTotal}</div>
        </li>
    )
}
