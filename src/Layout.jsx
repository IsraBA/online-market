import Cart from './Cart/Cart'
import Content from './Content/Content'
import './Layout.css'
import { useState, useEffect } from 'react'
import fruitSRC from './fruitsSRC.json'

export default function Layout() {

  const [fruits, setFruits] = useState(fruitSRC);

  const [cart, setCart] = useState(
    localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : {});

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cartJSON = localStorage.setItem('cart', JSON.stringify(cart));
    return () => {
      cartJSON;
    }
  }, [cart])

  useEffect(() => {
    setTotal(prevTotal => {
      let newTotal = 0;
      cart.forEach(cartItem => {
        newTotal += cartItem.price * cartItem.count;
      });
      return Number(newTotal.toFixed(2));
    });
  }, [cart]);

  return (
    <div className='layout'>
      <div className='cartLayout'>
        <Cart cart={cart} setCart={setCart} total={total} /></div>
      <div className='contentLayout'><Content fruits={fruits} cart={cart} setCart={setCart} /></div>
    </div>
  )
}
