import React from 'react'
import './User.css'
import profileP from '../../public/user-profile.png'
import DataContext from '../context/DataContext';
import { useEffect, useContext } from 'react'
import axios from 'axios';



export default function User() {

    const { user, setUser } = useContext(DataContext);
    // console.log(user)

    useEffect(() => {
        if (localStorage.token) {
        axios.get('http://localhost:2500/user/user',
            { headers: { Authorization: `Bearer ${localStorage.token}` } }
        ).then((res) => setUser(res.data))
        }
    }, [localStorage.token])


    return (
        <div className='user'>
            שלום {user ? user.fName : "אורח"}
            <div className="profileImg">
                <img src={user?.user ? user.user?.avatar : profileP} alt="profile picture" />
            </div>
        </div>
    )
}
