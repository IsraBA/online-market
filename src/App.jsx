import { Route, Routes, useNavigate } from 'react-router-dom'
import Layout from './Layout'
import Login from './Login/Login'
import './app.css'
import { useState, useEffect } from 'react'
import DataContext from './context/DataContext'


export default function App() {

  const [user, setUser] = useState(localStorage.user ? JSON.parse(localStorage.user) : {});
  const nav = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user?.status) {
      localStorage.user = JSON.stringify(user);
      nav('/categories');
    }
  }, [user])
  

  return (
    <DataContext.Provider value={{user, setUser}}>
      <div className='app'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Layout />} />
        </Routes>
      </div>
    </DataContext.Provider>
  )
}
