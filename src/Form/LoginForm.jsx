import { useState, useContext } from 'react';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
import axios from 'axios';

export default function Form() {

    const { user, setUser } = useContext(DataContext);
    const nav = useNavigate();

    // if (user?.status) {
    //    nav('/categories');
    //   }

    const initialState = { email: '', password: '' };
    const [formState, setFormState] = useState(initialState);
    const [formError, setFormError] = useState({ email: '', password: '' })
    const [wrong, setWrong] = useState(false);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^.{5,}$/;

    const goNext = (data) => {
        localStorage.token = data,
            nav('/'),
            setFormState({ email: '', password: '' })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formError).every((value) => !value.trim())) {
            try {
                axios.post('http://localhost:2500/login', formState)
                    .then((res) => goNext(res.data));
            } catch (error) {
                // setWrong(true);
                console.log(error.status)
            }
        }
    };

    const handleChange = (e) => {
        // console.log(e.target.email, e.target.value);
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
        <form className={styles.form} onSubmit={handleSubmit}>
            {wrong && <div className={styles.wrong}>שם משתמש או סיסמה שגויים</div>}
            {/* <h2>Log In</h2> */}
            <div className={styles.inputBox}>
                <label>אימייל: &nbsp;</label>
                <input type="email" name='email'
                    onChange={handleChange}
                    value={formState.email}
                    onBlur={handleBlur}
                    required />
                <div className={`${styles.error} ${formError.email ? styles.vis : ''}`}>{formError.email}</div>
            </div>
            <div className={styles.inputBox}>
                <label>סיסמה: &nbsp;</label>
                <input type="password" name='password'
                    onChange={handleChange}
                    value={formState.password}
                    required />
                <div className={`${styles.error} ${formError.password ? styles.vis : ''}`}>{formError.password}</div>
            </div>
            <button id={styles.submit} type="submit">התחבר</button>
        </form>
    )
}




{/* 
        ^__^
        (oo)\_______
        (__)\       )\/\
            ||----w |
            ||     ||
*/}
