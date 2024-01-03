import Item from './Item/Item'
import './ItemList.css'
import { useEffect, useState } from 'react'
import SingleItem from './Item/SingleItem';
import { Link, useParams } from 'react-router-dom';

export default function ItemList() {

    let { categoryName } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        // api >> response >> body >> setCat/Object.keys
        fetch(`https://jbh-mockserver.onrender.com/categories/${categoryName}`)
            .then(j => j.json())
            .then(response => setItems(response));
    }, []);

    return (
        <div className="items">
            <div className="fruits">
                {items.map(item => {
                    return (
                        <Link id='styledLink' to={"/items/" + item.id}>
                            <div className="product">
                                <Item key={item.id} item={item} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
