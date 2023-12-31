import Item from './Item/Item'
import './ItemList.css'
import { useEffect, useState } from 'react'
import SingleItem from './Item/SingleItem';

export default function ItemList({ url }) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        // api >> response >> body >> setCat/Object.keys
        fetch(`https://jbh-mockserver.onrender.com${url}`)
            .then(j => j.json())
            .then(response => setItems(response));
    }, []);

    return (
        <div className="items">
            <div className="fruits">
                {items.map(item => {
                    return <div className="product" onClick={() => location.href = `/items/${item.id}`}>
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
