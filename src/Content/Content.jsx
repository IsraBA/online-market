import ItemList from '../ItemList/ItemList'
import Menu from "../Menu/Menu"
import { useState, useEffect } from 'react'
import './Content.css'



export default function Content(props) {
  
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
      <div><ItemList filtered={props.items}/></div>
    </div>
  )
}
