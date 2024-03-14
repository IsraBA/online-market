import React from 'react'
import styles from './AddItem.module.css'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import profileP from '../../../../public/user-profile.png'
import DataContext from '../../../context/DataContext';

export default function AddItem() {

    const nav = useNavigate();
    const { userId } = useParams();
    const { user, setUser } = useContext(DataContext);

    const [thisUser, setThisUser] = useState({})
    let initialState = { fName: thisUser.fName, lName: thisUser.lName, email: thisUser.email };
    const [formState, setFormState] = useState(initialState);
    const [formError, setFormError] = useState({ fName: '', lName: '', email: '' });
    const [isChange, setIsChange] = useState(false)
    const [successPopUp, setSuccessPopUp] = useState(false);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formState === initialState) return;
        if (Object.values(formError).every((value) => !value.trim())) {
            await axios.put('http://localhost:2500/user/' + thisUser._id, formState,
                { headers: { Authorization: `Bearer ${localStorage.token}` } })
                .then((res) => { setThisUser(res.data), setSuccessPopUp(true) })
                .catch((err) => console.error(err));
        };
    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setFormState(oldForm => {
            const newData = { ...oldForm, [name]: value }
            return newData;
        });

        setFormError(oldForm => ({ ...oldForm, [name]: '' }));

        if (name === 'password' && !passwordRegex.test(value) && value.length !== 0) {
            setFormError(oldForm => ({ ...oldForm, [name]: '* הסיסמה חייבת להכיל לפחות 5 תווים' }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        setFormError(oldForm => ({ ...oldForm, [name]: '' }));

        if (name === 'email' && !emailRegex.test(value) && value.length !== 0) {
            setFormError(oldForm => ({ ...oldForm, [name]: '* נא להזין אימייל תקין' }));
        }
    }

    return (
        <form className={styles.userInfo} onSubmit={handleSubmit}>
            <label className={styles.profileP}>
                <img src={profileP} alt="תמונת פרופיל" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg>
                <input type="file" name='image' />
            </label>
            <ul className={styles.fields}>
                <li>
                    <label>
                        <b>שם פרטי: </b>
                        <input type="text"
                            name='fName'
                            value={formState.fName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required />
                    </label>
                </li>
                <li>
                    <label>
                        <b>שם משפחה: </b>
                        <input type="text"
                            name='lName'
                            value={formState.lName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required />
                    </label>
                </li>
                <li>
                    <label className={styles.email}>
                        <b>אימייל: </b>
                        <input type="email"
                            name='email'
                            value={formState.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required />
                        <div className={`${styles.error} ${formError.email ? styles.vis : ''}`}>{formError.email}</div>
                    </label>
                </li>
                {isChange &&
                    <li className={styles.buttons}>
                        <button id={styles.cancel} type='button' onClick={cancel}>ביטול</button>
                        <button id={styles.submit} type="submit">שמירה</button>
                    </li>
                }
            </ul>
        </form>
    )
}
