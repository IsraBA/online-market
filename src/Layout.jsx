import Cart from './Cart/Cart'
import Content from './Content/Content'
import './Layout.css'
import { useState, useEffect, useContext } from 'react'
import DataContext from './context/DataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Header from './Header/Header'

export default function Layout() {

  const { user, setUser } = useContext(DataContext);

  // בדיקה אם המשתמש מחובר
  const nav = useNavigate();
  useEffect(() => {
    // בדיקת סטטוס המשתמש
    console.log("user status:", user?.status);
    // אם סטטוס המשתמש שקרי הוא יועבר למסך לוג אין
    if (!user?.status) nav('/login');
  }, [user])

  const [cart, setCart] = useState(
    localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : {});

  useEffect(() => {
    let cartJSON = localStorage.setItem('cart', JSON.stringify(cart));
    return () => {
      cartJSON;
    }
  }, [cart])


  return (
    <DataContext.Provider value={{ cart, setCart }}>
      <div className='layout'>
        <header><Header user={user} setUser={setUser} /></header>
        <main>
          <div className='cartLayout'>
            <Cart />
          </div>
          <div className='content'>
            <Content />
          </div>
        </main>
      </div>
    </DataContext.Provider>
  )
}

