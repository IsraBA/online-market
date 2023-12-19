import Item from './Item/Item'
import './ItemList.css'


export default function ItemList(props) {

    return (
        <div className="items">
            <div className="fruits">
                {props.filtered.map(fruit => {
                    return <div className="product"> <Item
                        key={fruit.id}
                        id={fruit.id}
                        fruitName={fruit.name}
                        image={fruit.image}
                        price={fruit.price}
                        setCart={props.setCart}
                        count={props.cart.find(cartItem => cartItem.id === fruit.id) ?
                            props.cart.find(cartItem => cartItem.id === fruit.id).count :
                            undefined}
                    />
                    </div>
                })}
            </div>
        </div>
    )
}
