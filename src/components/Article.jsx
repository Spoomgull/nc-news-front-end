import { useEffect, useState} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function Article (){
    const article = useParams()
    const articleChoice = article.article_id
    
    const [oneArticle, setOneArticle] = useState([])
     useEffect(()=>{
         axios.get(`https://northcoders-news-api-bjpy.onrender.com/api/articles/${articleChoice}`)
         .then((article)=>{
             setOneArticle(article.data.article)
         })
 },[articleChoice])
 return (
<button>
    <div className="article">
        <li>Title: {oneArticle.title}</li>
        <li>Topic: {oneArticle.topic}</li>
        <img src={oneArticle.article_img_url} className="article-img"/>
        <li>Posted at: {oneArticle.created_at}</li>
        <li>Created by: {oneArticle.author}</li>
        <li>Likes: {oneArticle.votes}</li>
        <li>Comments: {oneArticle.comment_count}</li>
    </div>
</button>
)
}

export default Article