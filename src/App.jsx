import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AllArticles from "./components/AllArticles";
import Topics from "./components/Topics"
import ArticleContainer from "./components/ArticleContainer"
import Topic from "./components/Topic"
import Error from "./components/Error"
import ErrorTopic from './components/ErrorTopic';
import ErrorArticle from './components/ErrorArticle';

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
        <Route path="*" element={<Error/>}/>
        <Route path="/articles/*" element={<ErrorArticle/>}/>
        <Route path="/Topics/*" element={<ErrorTopic/>}/>
      </Routes>
    </>
  )
}

export default App
