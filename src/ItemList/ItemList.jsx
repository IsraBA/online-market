import Item from './Item/Item'
import './ItemList.css'


export default function ItemList(props) {

    return (
        <div className="items">
            <div className="fruits">
                {props.filtered.map(fruit => {
                    return <div className="product"> <Item
                        key={fruit.id}
                        item={fruit}
                    />
                    </div>
                })}
            </div>
        </div>
    )
}
