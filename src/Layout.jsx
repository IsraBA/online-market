import Cart from './Cart/Cart'
import Content from './Content/Content'
import './Layout.css'
import { useState, useEffect } from 'react'
import DataContext from './context/DataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Layout() {

  const [cart, setCart] = useState(
    localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : {});

  useEffect(() => {
    let cartJSON = localStorage.setItem('cart', JSON.stringify(cart));
    return () => {
      cartJSON;
    }
  }, [cart])

  return (
    <DataContext.Provider value={{ cart, setCart }}>
      <div className='layout'>
        <div className='cartLayout'>
          <Cart />
        </div>
        <div className="market">
          {/* <div className="categories" id={category.length == 0 ? "" : 'minimized'}>
            <div className="home" onClick={() => setCategory([])}>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className="category" id={category == fruits ? 'selected' : ""} onClick={() => setCategory(fruits)}>
              <div className="imgHolder">
                <img src="https://png.pngtree.com/png-clipart/20230310/ourmid/pngtree-fresh-fruit-png-image_6642661.png" alt="Fruits" />
              </div>
              Fruits
            </div>
            <span className='gapLine'></span>
            <div className="category" id={category == vegetables ? 'selected' : ""} onClick={() => setCategory(vegetables)}>
              <div className="imgHolder">
                <img src="https://static.vecteezy.com/system/resources/previews/022/984/730/non_2x/vegetable-transparent-free-png.png" alt="Vegetables" />
              </div>
              Vegetables
            </div>
            <span className='gapLine'></span>
            <div className="category" id={category == alcohol ? 'selected' : ""} onClick={() => setCategory(alcohol)}>
              <div className="imgHolder">
                <img src="https://roust.com/f/img/responsive/bottles@1x.png" alt="Alcohol" />
              </div>
              Alcohol
            </div>
            <span className='gapLine'></span>
            <div className="category" id={category == dairy ? 'selected' : ""} onClick={() => setCategory(dairy)}>
              <div className="imgHolder">
                <img src="https://png.monster/wp-content/uploads/2022/06/png.monster-790.png" alt="Dairy" />
              </div>
              Dairy
            </div>
          </div> */}
          {/* <div className='contentLayout' id={category.length == 0 ? 'hidden' : ""} > */}
          <div>
            <Content/>
          </div>
        </div>
      </div>
    </DataContext.Provider>
  )
}

