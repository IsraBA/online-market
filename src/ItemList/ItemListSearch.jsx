import Item from './Item/Item'
import './ItemList.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ItemList() {

    let { input } = useParams();
    const nav = useNavigate();
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2500/item/search/' + input)
            .then(response => setItems(response.data))
            .catch(() => nav("/404"));
    }, [input]);

    return (
        <div className="items">
            {items.length > 0 ? 
            <div className="fruits">
                {items.map(item => {
                    return (
                        <div className="product" onClick={() => nav("/items/" + item._id)}>
                            <Item key={item._id} item={item} />
                        </div>
                    )
                })} 
            </div> :
            <div className="noItems">
                <img src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt="no item gif" />
                <span>נראה שלא נמצאו מוצרים התואמים לחיפוש שלך</span>
            </div>
            }
        </div>
    )
}
