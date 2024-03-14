import React from 'react'
import styles from './Items.module.css'
import DataContext from '../../context/DataContext';
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cartImg from '../../../public/checkout.png'
import SingleItem from './SingleItem/SingleItem';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Items() {

  const nav = useNavigate();

  const { user } = useContext(DataContext);
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState({ אלכוהול: [], מחלבה: [], פירות: [], ירקות: [] });

  // חילוץ המוצרים של כל קטגוריה מתוך מערך הקטגוריות
  // ['אלכוהול', 'ירקות', 'מחלבה', 'פירות']
  useEffect(() => {
    const fetchItems = async () => {
      let allItems = { ...items };

      for (const cat of categories) {
        const res = await axios.get('http://localhost:2500/item/' + cat);
        allItems[cat] = res.data;
      }

      setItems((prevItems) => ({ ...prevItems, ...allItems }));
    };

    if (categories.length > 0) {
      fetchItems();
    }

  }, [categories]);

  useEffect(() => {
    axios.get('http://localhost:2500/item/categories',
      { headers: { Authorization: `Bearer ${localStorage.token}` } }
    ).then(res => setCategories(res.data))
      .catch(err => { console.error(err), nav('/categories') })
  }, [user]);

  return (
    <div className={styles.ordersPage}>
      <span className={styles.header}>
        <h1>מוצרים</h1>
        <button className={styles.addItem} onClick={() => nav('/adminPage/items/addItem')}>
          הוספת מוצר
          {/* <FontAwesomeIcon icon={faPlus} /> */}
        </button>
      </span>
      <div className={styles.list}>
        <table className={styles.items}>
          <thead>
            <tr className={styles.titles}>
              <th>תמונה</th>
              <th>שם המוצר</th>
              <th>קטגוריה</th>
              <th>מחיר</th>
              <th>ברקוד</th>
            </tr>
          </thead>
          <tbody>
            {/* כדי שמוצר יעלם כשהוא נמחק אפשר לעשות את האייטמים מערך של אובייקטים שמכילים קיי אחד
            שהוא השם של הקטגוריה ו-ווליו שהוא המערך של המוצרים */}
            {Object.keys(items).map(cat =>
              <>
                <tr key={cat}>
                  <td colSpan='5' id={styles.categoty}>{cat}</td>
                </tr>
                {items[cat].map(item => <SingleItem key={item._id} currentItem={item} setItems={setItems} />)}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
