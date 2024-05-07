import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Articles from "./components/Articles"

function App() {
  
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Articles/>}/>


      </Routes>
    </>
  )
}

export default App
