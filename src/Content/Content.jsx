import ItemList from '../ItemList/ItemList'
import Menu from "../Menu/Menu"
import { useState, useEffect } from 'react'
import './Content.css'
import Categories from '../Categories/Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'
import SingleItem from '../ItemList/Item/SingleItem';



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

  const [url, setUrl] = useState()

  useEffect(() => {
    if (location.pathname !== "/categories") {
      setUrl(location.pathname)
    }
  }, [])


  return (
    <div className='content'>
      {/* <div className='menu'><Menu colors={colors} handleColor={handleColor} handleInput={handleInput}/></div> */}
      {url ?
        (url.includes("/categories") ?
          <div className='itemList'><ItemList url={url} /></div> :
          <div className="item" >
            <SingleItem url={url} />
            </div>
        ) : (
          <Categories />)
      }
      {url &&
        <div className="home"
          onClick={() => location.href = "/categories"}>
          <FontAwesomeIcon icon={faHouse} />
        </div>}
    </div>
  )
}

