import ItemList from '../ItemList/ItemList'
import Menu from "../Menu/Menu"
import { useState, useEffect } from 'react'
import './Content.css'
import Categories from '../Categories/Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'



export default function Content({ data }) {

  const [category, setCategory] = useState();

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
      {/* <div className='menu'><Menu colors={colors} handleColor={handleColor} handleInput={handleInput}/></div> */}
      {category ?
        <div><ItemList category={category} /></div>
        :
        <Categories
          setCategory={setCategory}
        />}
        <div className="home" onClick={() => setCategory("")}><FontAwesomeIcon icon={faHouse} /></div>
    </div>
  )
}
