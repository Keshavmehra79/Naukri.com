import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Layout from './Pages/Layout'
import Jobs from './Pages/Jobs'
import Compnies from './Pages/Compnies'
import Service from './Pages/Service'
import Login from './Pages/Login'
import Home from './Pages/Home'


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/compnies' element={<Compnies/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
        
        </Route>
    </Routes>
    
    </>
  )
}


export default App