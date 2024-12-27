import React from 'react'
import Header from './sections/Header'
import Main from './sections/Main'
import { DataProvider } from './context/DataContext'
import Footer from './sections/Footer'
import './App.css'

const App = () => {
  return (
    <DataProvider>
      <Header />
      <Main />
      <Footer />
    </DataProvider>
  )
}

export default App