import ItemList from '../ItemList/ItemList'
import Menu from "../Menu/Menu"
import { useState, useEffect } from 'react'
import './Content.css'
import Categories from '../Categories/Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'
import SingleItem from '../ItemList/Item/SingleItem';
import { Link, Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';



export default function Content() {

  // let colors = []
  // props.items.forEach(f => {
  //   if (!colors.includes(f.color)) {
  //     colors.push(f.color)
  //   }
  // })

  // const [filtered, setFiltered] = useState(props.items);

  // const handleColor = (c) => {
  //   setFiltered(c ? props.items.filter(f => f.color == c) : props.items)
  // }

  // const handleInput = (inp) => {
  //   setFiltered(inp ? props.items.filter(f => f.name.toLowerCase().includes(inp)) : props.items)
  // }

  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Categories />} />
        {/*             where                  what       */}
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:categoryName' element={<div className='itemList'><ItemList /></div>} />
        <Route path='/items/:itemID' element={<div className="item" ><SingleItem /></div>} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Link className="home" to={"/categories"}><FontAwesomeIcon icon={faHouse} /></Link>
      {/* <div className='menu'><Menu colors={colors} handleColor={handleColor} handleInput={handleInput}/></div> */}
    </div>
  )
}

