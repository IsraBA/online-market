import Item from './Item/Item'
import './ItemList.css'
import { useEffect, useState } from 'react'

export default function ItemList({ category }) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        // api >> response >> body >> setCat/Object.keys
        fetch(`https://jbh-mockserver.onrender.com/categories/${category}`)
            .then(j => j.json())
            .then(response => setItems(response))
    }, []);

    return (
        <div className="items">
            <div className="fruits">
                {items.map(item => {
                    return <div className="product">
                        <Item
                            key={item.id}
                            item={item}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}
