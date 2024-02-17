import Item from './Item/Item'
import './ItemList.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ItemList() {

    let { categoryName } = useParams();

    const nav = useNavigate();

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2500/item/' + categoryName)
            .then(response => setItems(response.data))
            .catch(() => nav("/404"));
    }, []);

    return (
        <div className="fruits">
            {items.map(item => {
                return (
                    <div className="product" onClick={() => nav("/items/" + item._id)}>
                        <Item key={item._id} item={item} />
                    </div>
                )
            })}
        </div>
    )
}
