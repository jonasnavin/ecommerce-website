import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddMobile from '../pages/AddMobile'
import EditMobile from '../pages/EditMobile'
import DeleteMobile from '../pages/DeleteMobile'
import ViewMobile from '../pages/ViewMobile'

const Main = () => {
  return (
    <main style={{width: "80%", margin: "auto"}}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/view-mobile/:id' element={<ViewMobile />} />
            <Route path='/add-mobile' element={<AddMobile />} />
            <Route path='/edit-mobile/:id' element={<EditMobile />} />
            <Route path='/delete-mobile/:id' element={<DeleteMobile />} />
        </Routes>
    </main>
  )
}

export default Main