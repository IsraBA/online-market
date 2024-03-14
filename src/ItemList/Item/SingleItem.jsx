import React from 'react'
import './SingleItem.css'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import DataContext from '../../context/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function SingleItem() {
    
    const nav = useNavigate();

    const { cart, setCart } = useContext(DataContext);
    const [item, setItem] = useState({});

    let { itemID } = useParams();

    useEffect(() => {
        axios.get('http://localhost:2500/item/singleItem/' + itemID)
            .then(response => setItem(response.data))
            .catch(() => nav("/404"));
    }, []);

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

    const handleInput = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        if (newValue.trim() !== '') {
            let newCart = { ...cart };
            if (newValue > 100) {
                newCart[item._id].count = 100;
                setCart(newCart);
            }
            else if (e.target.value < 0 || e.target.value === "") {
                newCart[item._id].count = 0;
                setCart(newCart);
            }
            else {
                newCart[item._id].count = Number(newValue);
                setCart(newCart);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='sItem'>
            <Link id='styledLink' to={'/categories/' + item.category}>
                <button className="back">
                    <FontAwesomeIcon className='CircleArrowLeft' icon={faCircleArrowLeft} />
                </button>
            </Link>
            <div className='sItemImg'><img src={item.image} alt={item.name} /></div>
            <div className='sItemDetails'>
                <div className="sItemName">{item.name}</div>
                <div className="sItemId"><span>ברקוד</span>{item.barcode}</div>
                <div className="sItemPrice"><span>מחיר</span>{item.price}₪</div>
                <div className="about"><span>על המוצר</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae id repellendus quas optio, eligendi consequatur iste!
                        Necessitatibus natus doloribus officiis, ipsa ut sint optio.
                        Voluptatibus eos tempora excepturi.
                    </p>
                </div>
                {cart[item._id] ?
                    <div className='sCountAndButtons' onClick={(e) => e.stopPropagation()}>
                        <button className='sAmountButton' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} /></button>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="number"
                                min="1"
                                max="100"
                                className='sCount'
                                name='itemCount'
                                value={cart[item._id]?.count || 0}
                                onChange={handleInput}
                            />
                            <input type="submit" value="Submit" />
                        </form>
                        {/* <span className='count'>{cart[item._id]?.count || 0}</span> */}
                        <button
                            className='sAmountButton'
                            onClick={cart[item._id].count < 100 ? handlePlus : () => { }}
                        ><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    :
                    // אם המוצר לא קיים בעגלה יוצג כפתור הוסף לעגלה
                    <button className='sAddToCart' onClick={(e) => { e.stopPropagation(), handlePlus() }}><b>הוסף לעגלה</b></button>
                }
            </div>
        </div>
    )
}