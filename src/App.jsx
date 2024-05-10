import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AllArticles from "./components/AllArticles";
import Topics from "./components/Topics"
import ArticleContainer from "./components/ArticleContainer"
import Topic from "./components/Topic"

function App() {  
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllArticles/>}/>
        <Route path="/Topics" element={<Topics/>}/>
        <Route path='/articles/:article_id' element={<ArticleContainer/>}/>
        <Route path="/Topics/:topic" element={<Topic/>}/>
      </Routes>
    </>
  )
}

export default App
