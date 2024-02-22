import React from 'react'
import { NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import styles from './UserPage.module.css'
import './UserPage.css'
import DataContext from '../context/DataContext'


export default function UserPage() {

  const nav = useNavigate();

  const { user } = useContext(DataContext);
  // console.log(user)
  
  useEffect(() => {
    if (location.pathname === '/userPage') {
      nav('/userPage/personalInformation/' + user._id)
    }
  }, [])

  return (
    <div className={styles.userPage}>
      <ul className={styles.list}>
        <NavLink to={'/userPage/personalInformation/' + user._id}>
          פרטים אישיים
        </NavLink>
        <NavLink to={'/userPage/orders'}>
          הזמנות
        </NavLink>
        <NavLink to={'/userPage/deleteUser'}>
          מחיקת משתמש
        </NavLink>
      </ul>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
