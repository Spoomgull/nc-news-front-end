import { useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function AllArticles({setArticleChoice}){
    const [articlesArr, setArticlesArr] = useState([])
    const [loading, setLoading] = useState("loading")
    useEffect(()=>{
        axios.get("https://northcoders-news-api-bjpy.onrender.com/api/articles")
        .then((articles)=>{
            setArticlesArr(articles.data.articles)
            setLoading("loaded")
        })
    },[])
    
    if(loading==="loaded"){
        return (
            articlesArr.map((article,index)=>{
                return (
                    <Link to={`/articles/${article.article_id}`}  key={article.article_id}>
                        <button className="article">
                            <li>Title: {article.title}</li>
                            <li>Topic: {article.topic}</li>
                            <img src={article.article_img_url} className="article-img"/>
                            <li>Posted at: {article.created_at}</li>
                            <li>Created by: {article.author}</li>
                            <li>Likes: {article.votes}</li>
                            <li>Comments: {article.comment_count}</li>
                        </button>
                    </Link>
                )
                }
            )
        )
    }   
}

export default AllArticles