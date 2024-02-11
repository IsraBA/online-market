import React from 'react'
import { useContext } from 'react'
import DataContext from '../../context/DataContext';
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


export default function CartItem(props) {

    const { item } = props;
    const { cart, setCart } = useContext(DataContext);
    const nav = useNavigate();

    const handlePlus = () => {
        let newCart = { ...cart }
        if (newCart[item._id]) {
            newCart[item._id].count += 1
        }
        else {
            newCart[item._id] = { ...item, count: 1 }
        }
        setCart(newCart);
    };

    const handleMinus = () => {
        // בדיקה אם קיים בעגלה
        if (cart[item._id]) {
            let newCart = { ...cart }
            if (newCart[item._id].count > 1) {
                newCart[item._id].count -= 1
            }
            else {
                delete newCart[item._id];
            }
            setCart(newCart);
        }
    }

    return (
        <>
            <div className='fruitImgCart' onClick={() => nav(`/items/` + item._id)}><img src={item.image} alt={item.fruitName} /></div>
            <div className="details">
                <div className='fruitNameCart'>
                    {item.name}
                </div>
                <div className='itemPrice'>מחיר ליחידה: {item.price}₪</div>
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
                <div className="itemTotal">{props.itemTotal}₪</div>
            </div>
        </>
    )
}