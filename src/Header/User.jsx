import React from 'react'
import './User.css'


export default function User({user, setUser}) {

    return (
        <div className='user'>
            <div className="profileImg">
                <img src={user?.user && user.user?.avatar} alt="profile picture" />
            </div>
            Hello {user?.user && user.user?.userName}
        </div>
    )
}
