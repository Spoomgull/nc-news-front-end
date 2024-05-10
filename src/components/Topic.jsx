import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SortArticles from "./SortArticles"

function Topic (){
    const [topicArticles, setTopicArticles] = useState([])
    const {topic} = useParams()
    const [buttonOrder, setButtonOrder] = useState("desc")
    const [sortBy, setSortBy] = useState("created_at")
    useEffect(()=>{
        axios.get(`https://northcoders-news-api-bjpy.onrender.com/api/articles?topic=${topic}`)
        .then((response)=>{
            setTopicArticles(response.data.articles)
        }) 
    },[topic])


    if(sortBy!=="created_at"){
        if(buttonOrder==="asc"){
            topicArticles.sort((a,b)=>{return a[sortBy] - b[sortBy]})
        }else{topicArticles.sort((a,b)=>{return b[sortBy] - a[sortBy]})}
    }else if(sortBy==="created_at"){
        if(buttonOrder==="asc"){
            topicArticles.sort((a,b)=>{return new Date(a.created_at.split("T")[0]) - new Date(b.created_at.split("T")[0])})
        }else{topicArticles.sort((a,b)=>{return new Date(b.created_at.split("T")[0]) - new Date(a.created_at.split("T")[0])})}
    }
    

    return(
        <>
        <SortArticles setButtonOrder={setButtonOrder} setSortBy={setSortBy}/>
        {topicArticles.map((article)=>{
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
            })}
            </>
        )   
    
}

export default Topic