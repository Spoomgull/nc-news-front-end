import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function Topic (){
    const [topicArticles, setTopicArticles] = useState([])
    const {topic} = useParams()

    useEffect(()=>{
        axios.get(`https://northcoders-news-api-bjpy.onrender.com/api/articles?topic=${topic}`)
        .then((response)=>{
            setTopicArticles(response.data.articles)
        }) 
    },[topic])
    return topicArticles.map((article)=>{
        const created_at = article.created_at.split("T")
        return (<Link to={`/articles/${article.article_id}`} key={article.article_id}>
                    <article className="article">
                        <p>Title: {article.title}</p>
                        <p>Topic: {article.topic}</p>
                        <img src={article.article_img_url} className="article-img"></img>
                        <p>posted at: {created_at[0]}</p>
                        <p>created by: {article.author}</p>
                        <p>likes: {article.votes}</p>
                        <p>comments: {article.comment_count}</p>
                    </article>
                </Link>)
    })
}

export default Topic