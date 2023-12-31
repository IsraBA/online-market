// import { useState } from 'react'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export default function Item(props) {

    const handlePlus = () => {
        if (!props.count) {
            props.setCart(prevCart =>
                [...prevCart, {
                    id: props.id,
                    name: props.fruitName,
                    image: props.image,
                    price: props.price,
                    count: 1
                }]
            )
        }
        else {
            if (props.count == 100) {
                return;
            }
            else {
                props.setCart(prevCart =>
                    prevCart.map(cartItem => {
                        if (cartItem.id === props.id) {
                            return { ...cartItem, count: Number(cartItem.count) + 1 };
                        }
                        else { return { ...cartItem } };
                    })
                )
            }
        };
    };

    const handleMinus = () => {
        if (props.count) {
            if (props.count > 1) {
                props.setCart(prevCart =>
                    prevCart.map(cartItem => {
                        if (cartItem.id === props.id) {
                            return { ...cartItem, count: Number(cartItem.count) - 1 };
                        }
                        else { return { ...cartItem } }
                    })
                )
            }
            else {
                props.setCart(prevCart =>
                    prevCart.filter(cartItem => cartItem.id !== props.id)
                );
            }
        }
        else { return; }
    }

    // const [inputValue, setInputValue] = useState(props.count ? props.count : 0)
    const handleInput = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        if (newValue.trim() !== '') {
            props.setCart(prevCart =>
                prevCart.map(cartItem => {
                    if (cartItem.id === props.id) {

                        if (e.target.value > 100) {
                            return { ...cartItem, count: 100 };
                        }
                        else if (e.target.value < 0 || e.target.value === "") {
                            return { ...cartItem, count: 0 };
                        }
                        else {
                            return { ...cartItem, count: e.target.value };
                        }
                    }
                    else { return { ...cartItem } }
                })
            )
        }
        else { return; }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>

            <div className='fruitName'>{props.fruitName}</div>
            {props.image ? <div className='fruitImg'><img src={props.image} alt={props.fruitName} /></div> : ""}
            {props.price ? <div className='price'>{props.price}$</div> : ""}
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
                    {props.count ?
                        <div className='countAndButtons'>
                            <button className='amountButton' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} /></button>
                            <form onSubmit={handleSubmit}>
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
                            </form>
                            {/* <span className='count'>{props.count ? props.count : 0}</span> */}
                            <button
                                className='amountButton'
                                onClick={handlePlus}
                            ><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                        :
                        <button className='addToCart' onClick={handlePlus}>Add To Cart</button>
                    }
                </div>}


        </>
    )
}
