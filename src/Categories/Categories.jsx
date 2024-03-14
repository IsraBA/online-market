import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import alcohol from '../../public/alcohol.png'


export default function Categories() {

    const nav = useNavigate();
    const [catArray, setCatArray] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2500/item/categories')
            .then(response => setCatArray(response.data))
            // .catch(() => nav("/404"));
        // api >> response >> body >> setCat/Object.keys
        // fetch('https://jbh-mockserver.onrender.com/categories')
        //     .then(j => j.json())
        //     .then(response => {setCatArray(response), console.log(response)});
    }, []);

    // [ 'alcohol', 'dairy', 'fruits', 'vegetables' ]
    const images = {
        אלכוהול: alcohol,
        מחלבה: 'https://img.freepik.com/premium-photo/dairy-protein-products-concept_80510-284.jpg',
        פירות: 'https://png.pngtree.com/png-clipart/20230310/ourmid/pngtree-fresh-fruit-png-image_6642661.png',
        ירקות: 'https://static.vecteezy.com/system/resources/previews/022/984/730/non_2x/vegetable-transparent-free-png.png'
    }

    return (
        <div className="categories">
            {catArray ?
                catArray.map(category => {
                    return (
                        <Link id='styledLink' to={"/categories/" + category}>
                            <div className="category" key={category}>
                                {images[category] && 
                                <div className="imgHolder">
                                    <img src={images[category]} alt={category} />
                                </div>}
                                {category}
                            </div>
                        </Link>
                    )
                })
                :
                <div className="loading">
                    <img src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif" alt="loading gif" />
                </div>}
        </div>
    )
}
