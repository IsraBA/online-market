import Cart from './Cart/Cart'
import Content from './Content/Content'
import './Layout.css'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header/Header'
import DataContext from './context/DataContext'

export default function Layout() {

  const { user, setUser } = useContext(DataContext);

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
    <DataContext.Provider value={{ cart, setCart, user, setUser }}>
      <div className='layout'>
        <header><Header /></header>
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

