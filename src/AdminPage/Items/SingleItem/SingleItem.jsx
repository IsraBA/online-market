import React from 'react'
import styles from './SingleItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import axios from 'axios'
import { faCheck, faEllipsisVertical, faFloppyDisk, faTrash } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'


export default function SingleItem({ currentItem, setItems }) {

  const [item, setItem] = useState(currentItem);
  const [editMode, setEditMode] = useState(false);
  const initialForm = {
    image: item.image,
    name: item.name,
    category: item.category,
    price: item.price,
    barcode: item.barcode
  }
  const [formState, setFormState] = useState(initialForm);
  const [formError, setformError] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmDel, setConfirmDel] = useState(false);
  const [successDeleted, setSuccessDeleted] = useState(false);


  const alertFormError = (err) => {
    setformError(err);
    setFormState(initialForm);
    setTimeout(() => {
      setformError('');
    }, 4000)
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert('יש לבחור קובץ עד 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        // console.log(reader.result); // Log the base64-encoded image data URL
        setFormState(oldForm => ({
          ...oldForm, [name]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormState(oldForm => ({
        ...oldForm, [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    setEditMode(false);
    if (_.isEqual(formState, initialForm)) return setformError('');

    setLoading(true);

    const formData = new FormData();
    formData.append('image', formState.image);
    formData.append('name', formState.name);
    formData.append('category', formState.category);
    formData.append('price', formState.price);
    formData.append('barcode', formState.barcode);
    // console.log(Object.fromEntries(formData.entries()))

    await axios.put('http://localhost:2500/item/' + item._id, formData,
      { headers: { Authorization: `Bearer ${localStorage.token}` } })
      .then((res) => { setItem(res.data), setEditMode(false), setformError(''), setLoading(false) })
      .catch((err) => alertFormError(err.response.data));
  }

  const deleteItem = () => {

    axios.delete('http://localhost:2500/item/' + item._id,
      { headers: { Authorization: `Bearer ${localStorage.token}` } })
      .then((res) => {
        console.log(res),
          setSuccessDeleted(true),
          setItems((prevItems) => {
            let newItems = { ...prevItems };
            newItems[item.category] = newItems[item.category].filter((remainingItem) => remainingItem._id !== item._id);
            console.log('newItems: ', newItems)
            return newItems;
          })
      })
      .catch((err) => { alertFormError("אירעה שגיאה בעת המחיקה"), console.error(err) });
  };

  return (
    <>
      {confirmDel && <div className={styles.confirmDel}>
        {successDeleted ?
          <div>
            <h1>המוצר נמחק בהצלחה</h1>
            <ul>
              <li onClick={() => { setSuccessDeleted(false), setConfirmDel(false) }}>אוקי</li>
            </ul>
          </div>
          :
          <div>
            <h1>האם למחוק מוצר זה?</h1>
            <p>שם: {item.name}, ברקוד: {item.barcode}</p>
            <ul>
              <li onClick={deleteItem}>כן</li>
              <li onClick={() => setConfirmDel(false)}>לאאא</li>
            </ul>
          </div>
        }
      </div>}
      {editMode ?
        <tr className={styles.item}>
          <td className={styles.imgTd}>
            <label className={styles.itemImage}>
              <span> <FontAwesomeIcon icon={faSquarePlus} /></span>
              <img src={formState.image} alt={formState.name} />
              <input onChange={handleChange} type="file" name='image' accept="image/*" />
            </label>
          </td>
          {/* <td><input onChange={handleChange} type="text" name='image' value={formState.image} required /></td> */}
          <td><input onChange={handleChange} type="text" name='name' value={formState.name} required /></td>
          <td><input onChange={handleChange} type="text" name='category' value={formState.category} required /></td>
          <td><input onChange={handleChange} type="number" name='price' value={formState.price} required /></td>
          <td><input onChange={handleChange} type="text" name='barcode' value={formState.barcode} required /></td>
          <td id={styles.submit} onClick={handleSubmit}>
            <FontAwesomeIcon icon={faFloppyDisk} />
          </td>
        </tr>
        :
        <tr className={styles.item}>

          <td className={styles.imgTd}><img src={item.image} alt={item.name} /></td>
          <td>
            {formError && <span id={styles.error}><span>{formError}</span></span>}
            {loading && <span id={styles.error}><img src="https://media1.giphy.com/media/7FfMfPHQr9romeeKtk/giphy-preview.gif" alt="loading" /></span>}
            {item.name}
          </td>
          <td>{item.category}</td>
          <td>₪{item.price}</td>
          <td>{item.barcode}</td>
          <td id={styles.menu}>
            <span onClick={() => setEditMode(true)}><FontAwesomeIcon icon={faPenToSquare} /></span>
            <span onClick={() => setConfirmDel(true)}><FontAwesomeIcon icon={faTrash} /></span>
          </td>
        </tr>
      }
    </>
  )
}
