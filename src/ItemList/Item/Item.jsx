import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react'
import DataContext from '../../context/DataContext';


export default function Item({ item }) {

    const { cart, setCart } = useContext(DataContext);

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
        <>
            <div className='fruitName'>{item.name}</div>
            <div className='fruitImg'><img src={item.image} alt={item.fruitName} /></div>
            <div className='price'>{item.price}₪</div>
            <div>
                {/* אם המוצר קיים בעגלה יוצגו כפתורי הפלוס מינוס */}
                {cart[item._id] ?
                    <div className='countAndButtons' onClick={(e) => e.stopPropagation()}>
                        <button className='amountButton' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} /></button>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="number"
                                min="1"
                                max="100"
                                className='count'
                                name='itemCount'
                                value={cart[item._id]?.count || 0}
                                onChange={handleInput}
                            />
                            <input type="submit" value="Submit" />
                        </form>
                        {/* <span className='count'>{cart[item._id]?.count || 0}</span> */}
                        <button
                            className='amountButton'
                            onClick={cart[item._id].count < 100 ? handlePlus : () => { }}
                        ><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    :
                    // אם המוצר לא קיים בעגלה יוצג כפתור הוסף לעגלה
                    <button className='addToCart' onClick={(e) => {e.stopPropagation(), handlePlus()}}>הוסף לעגלה</button>
                }
            </div>


        </>
    )
}
