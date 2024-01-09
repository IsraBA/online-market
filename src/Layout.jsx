import Cart from './Cart/Cart'
import Content from './Content/Content'
import './Layout.css'
import { useState, useEffect, useContext } from 'react'
import DataContext from './context/DataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Header from './Header/Header'
import axios from 'axios'

export default function Layout() {

  const { user, setUser } = useContext(DataContext);

  // בדיקה אם המשתמש מחובר
  const nav = useNavigate();
  useEffect(() => {
    // בדיקת סטטוס המשתמש
    console.log("user status:", user?.status);
    // אם סטטוס המשתמש שקרי הוא יועבר למסך לוג אין
    if (!user?.status || !JSON.parse(localStorage.user).status) nav('/login');
  }, [localStorage.user, user])

  const [cart, setCart] = useState(
    localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : {});

  useEffect(() => {
    let cartJSON = localStorage.setItem('cart', JSON.stringify(cart));
    return () => {
      cartJSON;
    }
  }, [cart])

  // פונקציית החיפוש
  // const [filtered, setFiltered] = useState()
  // const [allItems, setAllItems] = useState([])
  // let newAllItems = allItems
  // axios.get('https://jbh-mockserver.onrender.com/categories/fruits')
  //   .then((response) => newAllItems = [...newAllItems, ...response.data])
  //   .then(axios.get('https://jbh-mockserver.onrender.com/categories/alcohol')
  //     .then((response) => newAllItems = [...newAllItems, ...response.data])
  //     .then(axios.get('https://jbh-mockserver.onrender.com/categories/vegetables')
  //       .then((response) => newAllItems = [...newAllItems, ...response.data])
  //       .then(axios.get('https://jbh-mockserver.onrender.com/categories/dairy')
  //         .then((response) => newAllItems = [...newAllItems, ...response.data])
  //       )
  //     )
  //   ).then(console.log(newAllItems))

  const handleInput = (inp) => {
    // setFiltered(inp ? allItems.filter(item => item.name.toLowerCase().includes(inp)) : allItems)
  }


  return (
    <DataContext.Provider value={{ cart, setCart }}>
      <div className='layout'>
        <header><Header user={user} setUser={setUser}/></header>
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

