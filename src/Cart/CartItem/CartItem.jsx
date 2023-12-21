import React from 'react'
import { useContext } from 'react'
import DataContext from '../../context/DataContext';
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export default function CartItem(props) {

    const { item } = props;
    const { cart, setCart } = useContext(DataContext);

    const handlePlus = () => {
        let newCart = { ...cart }
        if (newCart[item.id]) {
            newCart[item.id].count += 1
        }
        else {
            newCart[item.id] = { ...item, count: 1 }
        }
        setCart(newCart);
    };

    const handleMinus = () => {
        // בדיקה אם קיים בעגלה
        if (cart[item.id]) {
            let newCart = { ...cart }
            if (newCart[item.id].count > 1) {
                newCart[item.id].count -= 1
            }
            else {
                delete newCart[item.id];
            }
            setCart(newCart);
        }
    }

    return (
        <>
            <div className='fruitImgCart'><img src={item.image} alt={item.fruitName} /></div>
            <div className="details">
                <div className='fruitName'>
                    {item.name}
                </div>
                <div className='itemPrice'>Price per unit: {item.price}$</div>
                <div className='countAndButtonsCart'>
                    <button className='amountButtonCart'
                        onClick={handleMinus}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className='itemCount'>{item.count}</span>
                    <button className='amountButtonCart'
                        onClick={item.count < 100 ? handlePlus : () => { }}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className="itemTotal">{props.itemTotal}$</div>
            </div>
        </>
    )
}

{/* {props.cartItemon ? <button className='removeItem' onClick={() => props.setCart((prevCart =>
                        prevCart.filter(cartItem => cartItem.id !== props.id)
                    ))}><FontAwesomeIcon icon={faTrash} /></button> : ""} */}
// <div className='fruitName'>{props.item.name}</div>
// <div className='fruitImg'><img src={props.item.image} alt={props.item.fruitName} /></div>
// <div className='price'>{props.item.price}$</div>
{/* יצירת כפתורים בסגנון שונה לעגלה ולתוכן */ }
{/* {props.cartItemon ?
                        <div className="countButtonsTotal">
                            <div className='countAndButtonsCart'>
                                <button className='amountButtonCart' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} /></button>
                                <span className='countCart'>{0}</span>
                                <button
                                    className='amountButtonCart'
                                    onClick={handlePlus}
                                ><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <div className="itemTotal">{props.itemTotal}$</div>
                            <div className='fruitImgCart'><img className="cartImage" src={props.fruitImgCart} alt={props.fruitName} /></div>
                        </div>
                        : */}
