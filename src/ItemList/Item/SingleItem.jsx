import React from 'react'
import './SingleItem.css'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import DataContext from '../../context/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


export default function SingleItem({ url }) {

    console.log(url);
    const { cart, setCart } = useContext(DataContext);
    const [item, setItem] = useState({});

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

    const handleInput = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        if (newValue.trim() !== '') {
            let newCart = { ...cart };
            if (newValue > 100) {
                newCart[item.id].count = 100;
                setCart(newCart);
            }
            else if (e.target.value < 0 || e.target.value === "") {
                newCart[item.id].count = 0;
                setCart(newCart);
            }
            else {
                newCart[item.id].count = Number(newValue);
                setCart(newCart);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        fetch(`https://jbh-mockserver.onrender.com${url}`)
            .then(j => j.json())
            .then(response => setItem(response));
    }, []);

    return (
        <div className='sItem'>
            <button
                onClick={() => location.href = '/categories'}
                className="back">
                <FontAwesomeIcon className='CircleArrowLeft' icon={faCircleArrowLeft} />
            </button>
            <div className='sItemImg'><img src={item.image} alt={item.name} /></div>
            <div className='sItemDetails'>
                <div className="sItemName">{item.name}</div>
                <div className="sItemId"><span>Item ID</span>{item.id}</div>
                <div className="sItemPrice"><span>Price</span>{item.price}$</div>
                <div className="about"><span>About</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae id repellendus quas optio, eligendi consequatur iste!
                        Necessitatibus natus doloribus officiis, ipsa ut sint optio.
                        Voluptatibus eos tempora excepturi.
                    </p>
                </div>
                {cart[item.id] ?
                    <div className='sCountAndButtons' onClick={(e) => e.stopPropagation()}>
                        <button className='sAmountButton' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} /></button>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="number"
                                min="1"
                                max="100"
                                className='sCount'
                                name='itemCount'
                                value={cart[item.id]?.count || 0}
                                onChange={handleInput}
                            />
                            <input type="submit" value="Submit" />
                        </form>
                        {/* <span className='count'>{cart[item.id]?.count || 0}</span> */}
                        <button
                            className='sAmountButton'
                            onClick={cart[item.id].count < 100 ? handlePlus : () => { }}
                        ><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    :
                    // אם המוצר לא קיים בעגלה יוצג כפתור הוסף לעגלה
                    <button className='sAddToCart' onClick={(e) => { e.stopPropagation(), handlePlus() }}>Add To Cart</button>
                }
            </div>
        </div>
    )
}

// {"id":"01","name":"Apple","color":"Red","emoji":"🍎","price":1.99,"image":"https://i.pinimg.com/originals/c4/d9/ee/c4d9eefa0d4136938ed03c7359286f7a.png"}