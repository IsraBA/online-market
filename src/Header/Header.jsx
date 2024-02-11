import React from 'react'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../context/DataContext'
import User from './User'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import logo from '../../public/cart logo.png'
import Search from '../Menu/Search';


export default function Header() {

    const { user, setUser } = useContext(DataContext);
    const nav = useNavigate();

    // חיפוש בכל המוצרים בעת הקלדה בשורת חיפוש
    const [search, setSearch] = useState(localStorage.search ? localStorage.search : "");

    useEffect(() => {
        if (search) {
            nav('/search/' + search)
        }
    }, [search])

    const handleClick = () => {
        if (user) {
            setUser("");
            localStorage.user = "";
        } else { nav('/login') }
    };


    return (
        <>
            <Link to={"/categories"} className="logo"><img src={logo} alt="logo" /></Link>
            <Search setSearch={setSearch} />
            <button className="userPopUp"><User />
                <div className="profileMenu" onClick={handleClick}>
                    <span>{user ? "התנתק" : "התחבר"}</span>&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: 17 }} />
                </div>
            </button>
            {/* <Link className="home" to={"/categories"}><FontAwesomeIcon icon={faHouse} /></Link> */}
        </>
    )
}
