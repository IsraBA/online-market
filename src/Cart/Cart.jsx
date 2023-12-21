import React from 'react'
import { useState, useEffect } from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import CartItem from './CartItem/CartItem'


export default function Cart(props) {

  const { cart, setCart } = useContext(DataContext);
  const [total, setTotal] = useState(0);

  let newTotal = 0;
  Object.values(cart).forEach(cartItem => {
    newTotal += cartItem.price * cartItem.count
  });
  setTotal(Number(newTotal.toFixed(2)));

  const removeItem = (id) => {
    let newCart = { ...cart }
    delete newCart[id];
    setCart(newCart);
  }

  return (
    <div className='cart'>
      <div className="cartHeader">
        <span>
          <span className='cartIcon'><FontAwesomeIcon icon={faCartShopping} /></span>
          <span>cart</span>
        </span>
        <button className='removeAll' title="Remove all" onClick={() => setCart({})}>
          <img className='removeAllImg' src="https://static.thenounproject.com/png/249220-200.png" alt="remove all" />
        </button>
      </div>
      <div className="cartItems">
        {Object.values(cart).map(cartItem =>
          <div className="cartItem">
            <button className='removeItem' onClick={() => removeItem(cartItem.id)}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <CartItem
              key={cartItem.id}
              item={cartItem}
              itemTotal={Number((cartItem.count * cartItem.price).toFixed(2))}
            />
          </div>
        )}
      </div>
      <div className="payArea">
        <button className="pay">
          <FontAwesomeIcon icon={faCartShopping} /> Pay: {total}$
        </button>
      </div>
    </div>
  )
}
