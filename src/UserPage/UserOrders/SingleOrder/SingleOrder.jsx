import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './SingleOrder.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import DataContext from '../../../context/DataContext';
import CheckoutItem from '../../../Checkout/CheckoutItem/CheckoutItem';
import Success from '../../../Checkout/Success/Success';
import Fail from '../../../Checkout/Fail/Fail';

export default function SingleOrder() {
    const nav = useNavigate();
    const { orderId } = useParams();

    const { user } = useContext(DataContext);
    const [order, setOrder] = useState({});

    useEffect(() => {
        if (user) {
            axios.get('http://localhost:2500/order/' + orderId,
                { headers: { Authorization: `Bearer ${localStorage.token}` } }
            ).then(res => setOrder(res.data))
                .catch(err => { console.error(err), nav('/categories') })
        } else { nav('/categories') }
    }, [user]);

    console.log({order})

    return (
        <div className={styles.details}>
            <div className={styles.user}>
                <div>
                    <h2>פרטי משלוח</h2>
                    <ul>
                        <li>{order.userId?.fName} {order.userId?.lName}</li>
                        <li> {order.userId?.email}</li>
                        <li>הנגב 48, אריאל</li>
                        <li>4076730</li>
                        <li>ישראל</li>
                    </ul>
                </div>
                <div>
                    <h2>סכום ששולם</h2>
                    <ul className={styles.paymant}>
                        <li><span>משלוח: </span><span>₪0</span></li>
                        <li><span>הנחות: </span><span>₪0</span></li>
                        <li><span>סך הכל: </span><span>₪{order.total}</span></li>
                    </ul>
                </div>
            </div>
            <div className={styles.order}>
                <h2>פרטי הזמנה</h2>
                <ul>
                    {order.items?.map(item =>
                        <CheckoutItem
                            key={item._id}
                            image={item.itemId.image}
                            name={item.itemId.name}
                            count={item.amount}
                            price={item.price}
                            itemTotal={Number((item.amount * item.price).toFixed(2))}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}
