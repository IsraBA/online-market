import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react'
import DataContext from '../../context/DataContext';


export default function Item(props) {

    const { cart, setCart } = useContext(DataContext);

    const handlePlus = () => {
        let newCart = { ...cart }
        if (newCart[props.item.id]) {
            newCart[props.item.id].count += 1
        }
        else {
            newCart[props.item.id] = { ...props.item, count: 1 }
        }
        setCart(newCart);
    };

    const handleMinus = () => {
        // בדיקה אם קיים בעגלה
        if (cart[props.item.id]) {
            let newCart = { ...cart }
            if (newCart[props.item.id].count > 1) {
                newCart[props.item.id].count -= 1
            }
            else {
                delete newCart[props.item.id];
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
                newCart[props.item.id].count = 100;
                setCart(newCart);
            }
            else if (e.target.value < 0 || e.target.value === "") {
                newCart[props.item.id].count = 0;
                setCart(newCart);
            }
            else {
                newCart[props.item.id].count = Number(newValue);
                setCart(newCart);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='fruitName'>{props.item.name}</div>
            <div className='fruitImg'><img src={props.item.image} alt={props.item.fruitName} /></div>
            <div className='price'>{props.item.price}$</div>
            <div>
                {/* אם המוצר קיים בעגלה יוצגו כפתורי הפלוס מינוס */}
                {cart[props.item.id] ?
                    <div className='countAndButtons'>
                        <button className='amountButton' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} /></button>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="number"
                                min="1"
                                max="100"
                                className='count'
                                name='itemCount'
                                value={cart[props.item.id]?.count || 0}
                                onChange={handleInput}
                            />
                            <input type="submit" value="Submit" />
                        </form>
                        {/* <span className='count'>{cart[props.item.id]?.count || 0}</span> */}
                        <button
                            className='amountButton'
                            onClick={props.item.count < 100 ? handlePlus : () => {}}
                        ><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    :
                    // אם המוצר לא קיים בעגלה יוצג כפתור הוסף לעגלה
                    <button className='addToCart' onClick={handlePlus}>Add To Cart</button>
                }
            </div>


        </>
    )
}
