import React from 'react'
import styles from './UserOrders.module.css'
import DataContext from '../../context/DataContext';
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cartImg from '../../../public/checkout.png'


export default function UserOrders() {

  const nav = useNavigate();

  const { user } = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get('http://localhost:2500/order/user/' + user._id,
        { headers: { Authorization: `Bearer ${localStorage.token}` } }
      ).then(res => setOrders(res.data.reverse()))
        .catch(err => { console.error(err), nav('/categories') })
    } else { nav('/categories') }
  }, [user]);

  // הפיכת התאריך להיות בפורמט תאריך בלבד
  function formatDate(dateString) {
    const dateObj = new Date(dateString);

    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    const hours = ('0' + dateObj.getHours()).slice(-2);
    const minutes = ('0' + dateObj.getMinutes()).slice(-2);

    return { date: `${year}.${month}.${day}`, time: `${hours}:${minutes}` };
  }

  return (
    <div className={styles.ordersPage}>
      {orders.length > 0 ?
        <>
          <h1>הזמנות</h1>
          <p>יש ללחוץ על הזמנה כדי להציג את הפרטים</p>
          <div className={styles.list}>
            <table className={styles.orders}>
              <thead>
                <tr className={styles.titles}>
                  <th>מספר הזמנה</th>
                  <th>תאריך הזמנה</th>
                  <th>כמות פריטים</th>
                  <th>סך הכל</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(o => <tr onClick={() => nav('/userPage/orders/singleOrder/' + o._id)}>
                  <td>{o._id}</td>
                  <td>{formatDate(o.orderDate).date}</td>
                  <td>{o?.items.length}</td>
                  <td>₪{o.total}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </> :
        <div className={styles.noOrders}>
          <h2>נראה שעדיין לא הזמנת כלום...</h2>
          <img src={cartImg} alt="עגלה ריקה" />
        </div>
      }
    </div>
  )
}
