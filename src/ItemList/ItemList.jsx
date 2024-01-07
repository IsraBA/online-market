import Item from './Item/Item'
import './ItemList.css'
import { useEffect, useState } from 'react'
import SingleItem from './Item/SingleItem';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ItemList() {

    let { categoryName } = useParams();

    const nav = useNavigate();

    const [items, setItems] = useState([]);

    useEffect(() => {
        // api >> response >> body >> setCat/Object.keys
        fetch(`https://jbh-mockserver.onrender.com/categories/${categoryName}`)
            .then(j => j.json())
            .then(response => setItems(response))
            .catch(() => nav("/404"));
    }, []);

    return (
        <div className="items">
            <div className="fruits">
                {items.map(item => {
                    return (
                        <div className="product" onClick={() => nav("/items/" + item.id)}>
                            <Item key={item.id} item={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
