import React from 'react'
import { useEffect, useState } from 'react'


export default function Categories({ setCategory }) {

    const [catArray, setCatArray] = useState({});

    useEffect(() => {
        // api >> response >> body >> setCat/Object.keys
        fetch('https://jbh-mockserver.onrender.com/categories')
            .then(j => j.json())
            .then(response => setCatArray(response))
    }, [])

    return (
        <div>
            {Object.entries(catArray).map(([category, image]) => {
                return <div className="category" key={category} onClick={() => setCategory(category)}>
                    <div className="imgHolder">
                        <img src={image} alt={category} />
                    </div>
                    {category}
                </div>
            })}
        </div>
    )
}
