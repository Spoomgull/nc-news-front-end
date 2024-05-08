import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


function ArticleComments (){
    const article = useParams()
    const articleChoice = article.article_id
    const [articleComments, setArticleComments] = useState([])
    const [loading, setLoading] = useState("loading")
    

    useEffect(()=>{
        axios.get(`https://northcoders-news-api-bjpy.onrender.com/api/articles/${articleChoice}/comments`)
        .then((response)=>{
            setArticleComments(response.data.comments)})
            setLoading("loaded")
    }
    ,[articleChoice])
    if(loading === "loaded"){
        return articleComments.map((comment)=>{


            return (
                <button key={comment.comment_id}className="article-comment">
                    <li>Comment: {comment.body}</li>
                    <li>Posted by: {comment.author}</li>
                    <li>Likes: {comment.votes}</li>
                    <li>Posted at: {comment.created_at}</li>
                </button>
            )
        })

    }
}

export default ArticleComments