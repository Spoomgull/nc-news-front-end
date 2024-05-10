import { useEffect, useState} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function Article (){
    const article = useParams()
    const articleChoice = article.article_id
    const [loading , setLoading] = useState("loading")
    const [oneArticle, setOneArticle] = useState([])
     useEffect(()=>{
         axios.get(`https://northcoders-news-api-bjpy.onrender.com/api/articles/${articleChoice}`)
         .then((article)=>{
             setOneArticle(article.data.article)
             setLoading("loaded")
         })
 },[articleChoice])
 if(loading==="loaded"){
const created_at = oneArticle.created_at.split("T")
     return (
            <article className="article">
                <p>Title: {oneArticle.title}</p>
                <p>Topic: {oneArticle.topic}</p>
                <img src={oneArticle.article_img_url} className="article-img"/>
                <p>Posted at: {created_at[0]}</p>
                <p>Created by: {oneArticle.author}</p>
                <p>Likes: {oneArticle.votes}</p>
                <p>Comments: {oneArticle.comment_count}</p>
            </article>
)
}
}

export default Article