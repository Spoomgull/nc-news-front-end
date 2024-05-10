import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import DeleteComment from "./DeleteComment"

function ArticleComments ({loggedIn}){
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
            const created_at = comment.created_at.split("T")

            if(loggedIn===false){
                return(<div key={comment.comment_id}>  
                    <article className="article-comment">
                        <p>Comment: {comment.body}</p>
                        <p>Posted by: {comment.author}</p>
                        <p>Likes: {comment.votes}</p>
                        <p>Posted at: {created_at[0]}</p>
                    </article>
                </div>)

            }
            return (
                <div key={comment.comment_id}>  
                    <article className="article-comment">
                        <p>Comment: {comment.body}</p>
                        <p>Posted by: {comment.author}</p>
                        <p>Likes: {comment.votes}</p>
                        <p>Posted at: {created_at[0]}</p>
                        <DeleteComment comment={comment} loggedIn={loggedIn}/>
                    </article>
                </div>

            )
        })

    }
}

export default ArticleComments