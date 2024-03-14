import React from 'react'
import { useState, useEffect } from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import CartItem from './CartItem/CartItem'
import { useNavigate } from 'react-router-dom';


export default function Cart() {

  const nav = useNavigate();

  const { user, setUser } = useContext(DataContext);

  const { cart, setCart } = useContext(DataContext);
  const [cartLength, setCartLength] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Object.keys(cart).length) {
      setCartLength(true);
    } else { setCartLength(false) }
  }, [cart])


  let newTotal = 0;
  Object.values(cart).forEach(cartItem => {
    newTotal += cartItem.price * cartItem.count
  });
  setTotal(Number(newTotal.toFixed(2)));

  const removeItem = (_id) => {
    let newCart = { ...cart }
    delete newCart[_id];
    setCart(newCart);
  }

  const handlePayClick = () => {
    if (user && cartLength) {
      sessionStorage.success = false;
      nav('/checkout');
    }
    else if (user) { alert("יש למלא לפחות מוצר אחד בעגלה") }
    else { nav('/login') }
  };

  return (
    <div className='cart'>
      <div className="cartHeader">
        <span>
          <span className='cartIcon'><FontAwesomeIcon icon={faCartShopping} /></span>
          <span>עגלה</span>
        </span>
        {cartLength &&
          <button className='removeAll' title="Remove all" onClick={() => setCart({})}>
            <img className='removeAllImg' src="https://static.thenounproject.com/png/249220-200.png" alt="remove all" />
          </button>}
      </div>
      <div className="cartItems">
        {Object.values(cart).map(cartItem =>
          <div className="cartItem">
            <button className='removeItem' onClick={() => removeItem(cartItem._id)}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <CartItem
              key={cartItem._id}
              item={cartItem}
              itemTotal={Number((cartItem.count * cartItem.price).toFixed(2))}
            />
          </div>
        )}
      </div>
      {cartLength &&
        <div className="payArea">
          <button onClick={handlePayClick} className="pay">
            <FontAwesomeIcon icon={faCartShopping} /> לתשלום: {total}₪
          </button>
        </div>}
    </div>
  )
}
