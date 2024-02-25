import React from 'react'
import styles from './SingleItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import axios from 'axios'
import { faCheck, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'


export default function SingleItem({ currentItem }) {

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
      if (file.size > 0.5 * 1024 * 1024) {
        alert('יש לבחור קובץ עד 0.5MB');
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

    const formData = new FormData();
    formData.append('image', formState.image);
    formData.append('name', formState.name);
    formData.append('category', formState.category);
    formData.append('price', formState.price);
    formData.append('barcode', formState.barcode);

    await axios.put('http://localhost:2500/item/' + item._id, formState,
      { headers: { Authorization: `Bearer ${localStorage.token}` } })
      .then((res) => { setItem(res.data), setEditMode(false), setformError('') })
      .catch((err) => alertFormError(err.response.data));
  }


  return (
    <tr className={styles.item}>
      {editMode ?
        <>
          {/* <td className={styles.imgTd}>
            <label className={styles.itemImage}>
              <span> <FontAwesomeIcon icon={faSquarePlus} /></span>
              <img src={formState.image} alt={formState.name} />
              <input onChange={handleChange} type="file" name='image' accept="image/*" />
            </label>
          </td> */}
          <td><input onChange={handleChange} type="text" name='image' value={formState.image} required /></td>
          <td><input onChange={handleChange} type="text" name='name' value={formState.name} required /></td>
          <td><input onChange={handleChange} type="text" name='category' value={formState.category} required /></td>
          <td><input onChange={handleChange} type="number" name='price' value={formState.price} required /></td>
          <td><input onChange={handleChange} type="text" name='barcode' value={formState.barcode} required /></td>
          <td id={styles.submit} onClick={handleSubmit}>
            <FontAwesomeIcon icon={faFloppyDisk} />
          </td>
        </>
        :
        <>
          <td className={styles.imgTd}><img src={item.image} alt={item.name} /></td>
          <td>{formError && <span id={styles.error}><span>{formError}</span></span>}{item.name}</td>
          <td>{item.category}</td>
          <td>{item.price}₪</td>
          <td>{item.barcode}</td>
          <td id={styles.edit} onClick={() => setEditMode(true)}><FontAwesomeIcon icon={faPenToSquare} /></td>
        </>
      }
    </tr>
  )
}
