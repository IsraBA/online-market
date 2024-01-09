import React from 'react'
import { useState, useEffect } from 'react'
import User from './User'
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import logo from '../../public/cart logo.png'
import Search from '../Menu/Search';


export default function Header({ user, setUser }) {


    // חיפוש בכל המערכים בעת הקלדה בשורת חיפוש
    // const [textInput, setTextInput] = useState("");

    // useEffect(() => {
    //     handleInput(textInput);
    // }, [textInput])


    return (
        <>
            <Link to={"/categories"} className="logo"><img src={logo} alt="logo" /></Link>
            {/* <Search setTextInput={setTextInput} textInput={textInput} /> */}
            <button className="userPopUp"><User user={user} setUser={setUser} />
                <div className="profileMenu" onClick={() => { localStorage.user = ""; setUser({}); }}>
                    <span>Log Out</span>&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: 17 }} /></div>
            </button>
            {/* <Link className="home" to={"/categories"}><FontAwesomeIcon icon={faHouse} /></Link> */}
        </>
    )
}
