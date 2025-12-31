import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Layout from './Pages/Layout'
import Jobs from './Pages/Jobs'
import Compnies from './Pages/Compnies'
import Service from './Pages/Service'
import Home from './Pages/Home'
import Signup from './Pages/Signup'


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/compnies' element={<Compnies/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        </Route>
    </Routes>
    
    </>
  )
}


export default App