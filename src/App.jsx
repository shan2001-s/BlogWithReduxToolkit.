import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs'
import { Detail } from './components/Detail'
import { CreateBlog } from './components/CreateBlog'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Blogs/>}/>
      <Route path='/detail/:id' element ={ <Detail/>}/>
      <Route path='/create' element={<CreateBlog/>}/>
     </Routes>
    </>
  )
}

export default App
