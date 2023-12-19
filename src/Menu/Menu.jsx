import React from 'react'
import Search from './Search'
import { useState, useEffect } from 'react'
import './Menu.css'


export default function Menu(props) {

  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    props.handleInput(textInput);
  }, [textInput])

  return (
    <div className='menu'>
      {/* <h3>{textInput}</h3> */}
      <Search setTextInput={setTextInput} textInput={textInput} />
      <div className="buttons">
        <button className='filterBT' onClick={() => props.handleColor()}>All</button>
        {props.colors.map(color => {
          return <button className='filterBT' onClick={() => props.handleColor(color)}>{color}</button>
        })}
      </div>
    </div>
  )
}
