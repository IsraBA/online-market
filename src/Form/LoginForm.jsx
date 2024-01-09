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

    const initialState = localStorage.user ? JSON.parse(localStorage.user) : { userName: '', password: '' };
    const [formState, setFormState] = useState(initialState);
    const [formError, setFormError] = useState({ userName: '', password: '' })
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formError).every((value) => !value.trim())) {
            axios.post('https://jbh-mockserver.onrender.com/login', formState)
            .then((response) => setUser(response.data));
            nav('/')
            setFormState({ userName: '', password: '' })
        }
    };

    const handleChange = (e) => {
        // console.log(e.target.userName, e.target.value);
        const { name, value } = e.target;

        setFormState(oldForm => {
            const newData = { ...oldForm, [name]: value }
            localStorage.user = JSON.stringify({ ...newData, password: '' });
            return newData;
        });

        setFormError(oldForm => ({ ...oldForm, [name]: '' }));

        if (name === 'password' && !passwordRegex.test(value) && value.length !== 0) {
            setFormError(oldForm => ({ ...oldForm, [name]: '* Password must contain 8 characters, one uppercase and lowercase letter, and one number. Special characters are optional.' }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        setFormError(oldForm => ({ ...oldForm, [name]: '' }));

        if (name === 'userName' && value.length < 2 && value.length !== 0) {
            setFormError(oldForm => ({ ...oldForm, [name]: '* Name must be at least 2 letters' }));
        }
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {/* <h2>Log In</h2> */}
            <div className={styles.inputBox}>
                <label>Name: &nbsp;</label>
                <input type="text" name='userName'
                    onChange={handleChange}
                    value={formState.userName}
                    onBlur={handleBlur}
                    required />
                <div className={`${styles.error} ${formError.userName ? styles.vis : ''}`}>{formError.userName}</div>
            </div>
            <div className={styles.inputBox}>
                <label>Password: &nbsp;</label>
                <input type="password" name='password'
                    onChange={handleChange}
                    value={formState.password}
                    required />
                <div className={`${styles.error} ${formError.password ? styles.vis : ''}`}>{formError.password}</div>
            </div>
            <button id={styles.submit} type="submit">Log In</button>
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
