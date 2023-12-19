import ItemList from '../ItemList/ItemList'
import Menu from "../Menu/Menu"
import { useState, useEffect } from 'react'
import './Content.css'



export default function Content(props) {
  
  let colors = []
  props.fruits.forEach(f => {
    if (!colors.includes(f.color)) {
      colors.push(f.color)
    }
  })

  const [filtered, setFiltered] = useState(props.fruits);
  
  const handleColor = (c) => {
    setFiltered(c ? props.fruits.filter(f => f.color == c) : props.fruits)
  }

  const handleInput = (inp) => {
    setFiltered(inp ? props.fruits.filter(f => f.name.toLowerCase().includes(inp)) : props.fruits)
  }
  
  return (
    <div className='content'>
      <div className='menu'><Menu colors={colors} handleColor={handleColor} handleInput={handleInput}/></div>
      <div><ItemList filtered={filtered} cart={props.cart} setCart={props.setCart}/></div>
    </div>
  )
}
