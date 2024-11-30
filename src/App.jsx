import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { HomePage } from './Pages/Home'
import Navbar from './components/Navbar'
import { ListingPage } from './Pages/ListingPage'
import { BookDetailPage } from './Pages/Details'
import { OrderPage } from './Pages/ViewOrder'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/book/list' element={<ListingPage />}></Route>
        <Route path='/book/view/:bookId' element={<BookDetailPage />}></Route>
        <Route path='/book/orders' element={<OrderPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
