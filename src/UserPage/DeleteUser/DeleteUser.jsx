import React from 'react'
import styles from './DeleteUser.module.css'
import axios from 'axios';
import DataContext from '../../context/DataContext';
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';


export default function DeleteUser() {

  const nav = useNavigate();

  const { user, setUser } = useContext(DataContext);
  const [afterDelet, setAfterDelet] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  console.log(user)

  useEffect(() => {
    if (!user) {
      nav('/categories')
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const password = formData.get('password');
    axios.put('http://localhost:2500/user/delete/' + user._id, { password },
      { headers: { Authorization: `Bearer ${localStorage.token}` } })
      .then((res) => deleteUser())
      .catch((err) => {err.response.status == 401 ? setErrorMsg('סיסמה שגויה') : setErrorMsg('משהו השתבש, אפשר לנסות שוב מאוחר יותר')});
  };

  const deleteUser = () => {
    setAfterDelet(true);
    setTimeout(() => {
      setUser("");
      localStorage.token = '';
    }, 5000)
  };

  return (
    <div className={styles.deleteUserPage}>
      {afterDelet ? <>
        <h3>חשבונך נמחק בהצלחה</h3>
        <div className={styles.sentence}>הנך מועבר/ת לדף הבית...</div>
        <img src="https://assets-v2.lottiefiles.com/a/e09820ea-116b-11ee-8e93-4f2a1602d144/HdbA8EJlUN.gif" alt="delete gif" />
      </> :
        <>
          <h3>צר לנו שהחלטת לעזוב אותנו :(</h3>
          <div className={styles.sentence}>למחיקת החשבון הקלד/י את הסיסמה שלך</div>
          <form onSubmit={handleSubmit} className={styles.deleteUserForm}>
            <label>
              <input type="password" name='password' required />
            </label>
            {errorMsg && <h4>{errorMsg}</h4>}
            <button type="submit">מחק חשבון</button>
          </form>
        </>
      }
    </div>
  )
}
