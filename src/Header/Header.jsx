import React from 'react'
import User from './User'
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import logo from '../../public/cart logo.png'


export default function Header({ user, setUser }) {

    return (
        <>
            <Link to={"/categories"} className="logo"><img src={logo} alt="logo" /></Link>
            <button className="userPopUp"><User user={user} setUser={setUser} />
                <div className="profileMenu" onClick={() => {setUser({}); localStorage.user = ""}}>
                    <span>Log Out</span>&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: 17 }} /></div>
            </button>
            {/* <Link className="home" to={"/categories"}><FontAwesomeIcon icon={faHouse} /></Link> */}
        </>
    )
}
