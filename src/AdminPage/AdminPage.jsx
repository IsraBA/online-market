import React from 'react'
import { NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import styles from './AdminPage.module.css'
import './AdminPage.css'
import DataContext from '../context/DataContext'
import axios from 'axios'


export default function AdminPage() {

  const nav = useNavigate();
  const { user, setUser } = useContext(DataContext);

  const onlyAdmin = (userData) => {
    setUser(userData);
    location.pathname == '/adminPage' && nav('/adminPage/users');
  }

  useEffect(() => {
    if (user.premission) {
      user.premission !== 'admin' && nav('/');
    }
  }, [user])
  

  useEffect(() => {
    if (!localStorage.token) return nav('/');
    else {
      axios.get('http://localhost:2500/user/user',
        { headers: { Authorization: `Bearer ${localStorage.token}` } })
        .then((res) => onlyAdmin(res.data))
        .catch((err) => { setUser(""), nav('/') });
    }
  }, [location.pathname])

  return (
    <div className={styles.adminPage}>
      <ul className={styles.list}>
        <NavLink to={'/adminPage/users'}>
          משתמשים
        </NavLink>
        <NavLink to={'/adminPage/orders'}>
          הזמנות
        </NavLink>
        <NavLink to={'/adminPage/items'}>
          מוצרים
        </NavLink>
      </ul>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
