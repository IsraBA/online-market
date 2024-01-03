import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function Categories() {

    const [catArray, setCatArray] = useState({});

    useEffect(() => {
        // api >> response >> body >> setCat/Object.keys
        fetch('https://jbh-mockserver.onrender.com/categories')
            .then(j => j.json())
            .then(response => setCatArray(response));
    }, [])

    return (
        <div className="categories">
            {catArray ?
                Object.entries(catArray).map(([category, image]) => {
                    return (
                        <Link id='styledLink' to={"/categories/" + category}>
                            <div className="category" key={category}>
                                <div className="imgHolder">
                                    <img src={image} alt={category} />
                                </div>
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
