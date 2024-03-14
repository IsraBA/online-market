import React from 'react'
import './NotFound.css'
import image404 from '../assets/404 image.png'

export default function NotFound() {
    return (
        <div className="page404">
            <div className='image404'>
                <img src={image404} alt="not found" />
            </div>
            <span>Sorry, the page not found!</span>
        </div>
    )
}
