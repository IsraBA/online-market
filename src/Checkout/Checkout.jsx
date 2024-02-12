import React from 'react'
import { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Checkout.module.css'
import CheckoutItem from './CheckoutItem/CheckoutItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function Checkout() {

  const nav = useNavigate();

  const { cart = [], setCart, user, setUser } = useContext(DataContext);
  const [total, setTotal] = useState(0);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  // הגדרת הטוטל
  let newTotal = 0;
  Object.values(cart).forEach(cartItem => {
    newTotal += cartItem.price * cartItem.count
  });
  setTotal(Number(newTotal.toFixed(2)));

  // console.log({ cart, user })

  useEffect(() => {
    setSuccess(false);
    setFail(false);
    if (localStorage.token) {
      axios.get('http://localhost:2500/user/user',
        { headers: { Authorization: `Bearer ${localStorage.token}` } }
      ).then((res) => setUser(res.data))
        .catch((err) => { nav('/categories'), console.error(err) })
    } else { nav('/categories') }
  }, [localStorage.token]);

  const makeOrder = () => {
    const items = Object.values(cart).map(item => ({ itemId: item._id, amount: item.count }))
    const order = { userId: user._id, items: items };
    axios.post('http://localhost:2500/order/', order,
      { headers: { Authorization: `Bearer ${localStorage.token}` } })
      .then(() => setSuccess(true))
      .catch(error => {
        console.error('Error:', error);
        setFail(true);
      });
  };

  return (
    <div className={styles.checkout}>
      <h1>תשלום</h1>
      <div className={styles.details}>
        <div className={styles.user}>
          <div>
            <h2>פרטי משלוח</h2>
            <ul>
              <li>{user.fName} {user.lName}</li>
              <li> {user.email}</li>
              <li>הנגב 48, אריאל</li>
              <li>4076730</li>
              <li>ישראל</li>
            </ul>
          </div>
          <div>
            <h2>לתשלום</h2>
            <ul className={styles.paymant}>
              <li><span>משלוח: </span><span>₪29.90</span></li>
              <li><span>הנחות: </span><span>₪15.40</span></li>
              <li><span>סך הכל: </span><span>₪{total}</span></li>
            </ul>
            {!success && <button onClick={makeOrder}>יצירת הזמנה <FontAwesomeIcon icon={faCartShopping} /></button>}
          </div>
        </div>
        {success ?
          <div className={styles.feedback}>ההזמנה בוצעה בהצלחה!</div> :
          fail ? <div className={styles.feedback}>משהו לא הצליח, עדיף לנסות שוב מאוחר יותר</div> :
          <div className={styles.order}>
            <h2>פרטי ההזמנה</h2>
            <ul>
              {Object.values(cart).map(item =>
                <CheckoutItem
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  count={item.count}
                  price={item.price}
                  itemTotal={Number((item.count * item.price).toFixed(2))}
                />
              )}
            </ul>
          </div>
        }
      </div>
    </div>
  )
}
