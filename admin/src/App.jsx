import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'

import { ToastContainer } from 'react-toastify'; // to get a notification
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer/>
    <Navbar/>
      <hr/>
      <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
