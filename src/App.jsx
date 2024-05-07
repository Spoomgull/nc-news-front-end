import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Topics from "./components/Topics"

function App() {
  
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Articles/>}/>
        <Route path="/Topics" element={<Topics/>}/>

      </Routes>
    </>
  )
}

export default App
