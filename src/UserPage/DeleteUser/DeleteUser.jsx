import React from 'react'
import styles from './DeleteUser.module.css'
import axios from 'axios';
import DataContext from '../../context/DataContext';
import { useState, useEffect, useContext } from 'react'


export default function DeleteUser() {

  const { user, setUser } = useContext(DataContext);
  console.log(user)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios.delete('http://localhost:2500/user/' + user._id, formData,
      { headers: { Authorization: `Bearer ${localStorage.token}` } })
      .then((res) => { setUser(""), localStorage.token = '' })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h3>צר לנו שהחלטת לעזוב אותנו :(</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <div>למחיקת החשבון הקלד/י את הסיסמה שלך</div>
          <input type="password" name='password' required />
          <button type="submit">מחק חשבון</button>
        </label>
      </form>
    </div>
  )
}
