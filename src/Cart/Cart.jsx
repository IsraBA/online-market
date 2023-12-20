import React from 'react'
import './Cart.css'
import Item from '../ItemList/Item/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function Cart(props) {

  return (
    <div className='cart'>
      <div className="cartHeader">
        <span>
          <span className='cartIcon'><FontAwesomeIcon icon={faCartShopping} /></span>
          <span>cart</span>
        </span>
        <button className='removeAll' title="Remove all" onClick={() => props.setCart({})}>
          <img className='removeAllImg' src="https://static.thenounproject.com/png/249220-200.png" alt="remove all"/>
        </button>
      </div>
      <div className="cartItems">
        {/* {props.cart.map(cartItem =>
          <div className="cartItem">
            <div className='item'>
              <Item
                key={cartItem.id}
                id={cartItem.id}
                fruitName={cartItem.name}
                fruitImgCart={cartItem.image}
                itemTotal={Number((cartItem.count * cartItem.price).toFixed(2))}
                cartItemon={cartItem.count}
                count={cartItem.count}
                setCart={props.setCart}
              />
            </div>
          </div>
        )} */}
      </div>
      <div className="payArea">
        <button className="pay">
          <FontAwesomeIcon icon={faCartShopping} /> Pay: {props.total}$
        </button>
      </div>
    </div>
  )
}
