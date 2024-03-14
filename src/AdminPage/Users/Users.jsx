import React from 'react'
import styles from '../Orders/Orders.module.css'
import DataContext from '../../context/DataContext';
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cartImg from '../../../public/checkout.png'


export default function Users() {

  const nav = useNavigate();

  const { user } = useContext(DataContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2500/user',
      { headers: { Authorization: `Bearer ${localStorage.token}` } }
    ).then(res => setUsers(res.data.reverse()))
      .catch(err => { console.error(err), nav('/categories') })
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
      <h1>משתמשים</h1>
      <p>יש ללחוץ על משתמש כדי להציג את הפרטים ולערוך</p>
      <div className={styles.list}>
        <table className={styles.orders}>
          <thead>
            <tr className={styles.titles}>
              <th>שם</th>
              <th>אימייל</th>
              <th>מספר משתמש</th>
              <th>תאריך הצטרפות</th>
              <th>כמות הזמנות</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => <tr onClick={() => nav('/userPage/personalInformation/' + u._id)}>
              <td>{u.fName} {u.lName}</td>
              <td>{u.email}</td>
              <td>{u._id}</td>
              <td>{formatDate(u.createTime).date}</td>
              <td>{u?.orders.length}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
