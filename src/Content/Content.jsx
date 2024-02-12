import ItemList from '../ItemList/ItemList'
import ItemListSearch from '../ItemList/ItemListSearch'
import './Content.css'
import Categories from '../Categories/Categories';
import SingleItem from '../ItemList/Item/SingleItem';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Checkout from '../Checkout/Checkout';

export default function Content() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Categories />} />
        {/*             where                  what       */}
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:categoryName' element={<div className='itemList'><ItemList /></div>} />
        <Route path='/search/:input' element={<div className='itemList'><ItemListSearch /></div>} />
        <Route path='/items/:itemID' element={<div className="item" ><SingleItem /></div>} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

