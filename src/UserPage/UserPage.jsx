import React from 'react'
import { NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './UserPage.module.css'
import './UserPage.css'


export default function UserPage() {

  const nav = useNavigate();

  useEffect(() => {
    nav('/userPage/personalInformation')
  }, [])

  return (
    <div className={styles.userPage}>
      <ul className={styles.list}>
        <NavLink to={'/userPage/personalInformation'}>
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
