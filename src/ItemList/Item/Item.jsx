// import { useState } from 'react'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Item(props) {

    const handlePlus = () => {
        let newCart = {...props.cart}
       if (newCart[props.item.id]) {
        newCart[props.item.id].count += 1
       }
       else {
        newCart[props.item.id] = {...props.item, count: 1}
       }
       return props.setCart(newCart);
    };

    const handleMinus = () => {

    }

    // const handleInput = (e) => {
    //     e.preventDefault();
    //     const newValue = e.target.value;
    //     if (newValue.trim() !== '') {
    //         props.setCart(prevCart =>
    //             prevCart.map(cartItem => {
    //                 if (cartItem.id === props.id) {

    //                     if (e.target.value > 100) {
    //                         return { ...cartItem, count: 100 };
    //                     }
    //                     else if (e.target.value < 0 || e.target.value === "") {
    //                         return { ...cartItem, count: 0 };
    //                     }
    //                     else {
    //                         return { ...cartItem, count: e.target.value };
    //                     }
    //                 }
    //                 else { return { ...cartItem } }
    //             })
    //         )
    //     }
    //     else { return; }
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    return (
        <>
            {/* {props.cartItemon ? <button className='removeItem' onClick={() => props.setCart((prevCart =>
                        prevCart.filter(cartItem => cartItem.id !== props.id)
                    ))}><FontAwesomeIcon icon={faTrash} /></button> : ""} */}
            <div className='fruitName'>{props.item.fruitName}</div>
            {props.item.image ? <div className='fruitImg'><img src={props.item.image} alt={props.item.fruitName} /></div> : ""}
            {props.item.price ? <div className='price'>{props.item.price}$</div> : ""}
            {/* יצירת כפתורים בסגנון שונה לעגלה ולתוכן */}
            {props.cartItemon ?
                <div className="countButtonsTotal">
                    <div className='countAndButtonsCart'>
                        <button className='amountButtonCart' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} /></button>
                        <span className='countCart'>{props.count ? props.count : 0}</span>
                        <button
                            className='amountButtonCart'
                            onClick={handlePlus}
                        ><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <div className="itemTotal">{props.itemTotal}$</div>
                    <div className='fruitImgCart'><img className="cartImage" src={props.fruitImgCart} alt={props.fruitName} /></div>
                </div>
                :
                <div>
                    {/* {props.count ? */}
                        <div className='countAndButtons'>
                            <button className='amountButton' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} /></button>
                            {/* <form onSubmit={handleSubmit}>
                                <input
                                    type="number"
                                    min="1"
                                    max="100"
                                    className='count'
                                    name='itemCount'
                                    value={props.count ? props.count : 0}
                                    onChange={handleInput}
                                />
                                <input type="submit" value="Submit" />
                            </form> */}
                            <span className='count'>{props.cart[props.id]?.count || 0}</span>
                            <button
                                className='amountButton'
                                onClick={handlePlus}
                            ><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                        {/* :
                        <button className='addToCart' onClick={handlePlus}>Add To Cart</button>
                    } */}
                </div>}


        </>
    )
}
