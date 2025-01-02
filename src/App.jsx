import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import SingleArticle from "./components/SingleArticle"

function App() {
  return ( 
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
      </Routes>
    </div>
  )
}

export default App
