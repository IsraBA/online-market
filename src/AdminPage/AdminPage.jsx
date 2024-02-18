import React from 'react'
import { NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './AdminPage.module.css'
import './AdminPage.css'


export default function AdminPage() {

  const nav = useNavigate();

  useEffect(() => {
    if (location.pathname === '/adminPage') {
      nav('/adminPage/users')
    }
  }, [])

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
