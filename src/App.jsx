import { Route, Routes, useNavigate } from 'react-router-dom'
import Layout from './Layout'
import Login from './Login/Login'
import './app.css'
import { useState, useEffect } from 'react'
import DataContext from './context/DataContext'
import axios from 'axios'


export default function App() {

  const [user, setUser] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.token) {
      axios.get('http://localhost:2500/user/user',
        { headers: { Authorization: `Bearer ${localStorage.token}` } }
      ).then((res) => setUser(res.data));
      nav('/categories');
    }
  }, [localStorage.token])

  return (
    <DataContext.Provider value={{ user, setUser }}>
      <div className='app'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Layout />} />
        </Routes>
      </div>
    </DataContext.Provider>
  )
}
