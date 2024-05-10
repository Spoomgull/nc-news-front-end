import { useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import SortArticles from "./SortArticles"

function AllArticles(){
    const [articlesArr, setArticlesArr] = useState([])
    const [loading, setLoading] = useState("loading")
    const [buttonOrder, setButtonOrder] = useState("desc")
    const [sortBy, setSortBy] = useState("created_at")

    useEffect(()=>{
        axios.get("https://northcoders-news-api-bjpy.onrender.com/api/articles")
        .then((articles)=>{
            
            setArticlesArr(articles.data.articles)
            setLoading("loaded")
        })
    },[])

    if(sortBy!=="created_at"){
        if(buttonOrder==="asc"){
            articlesArr.sort((a,b)=>{return a[sortBy] - b[sortBy]})
        }else{articlesArr.sort((a,b)=>{return b[sortBy] - a[sortBy]})}
    }else if(sortBy==="created_at"){
        if(buttonOrder==="asc"){
            articlesArr.sort((a,b)=>{return new Date(a.created_at.split("T")[0]) - new Date(b.created_at.split("T")[0])})
        }else{articlesArr.sort((a,b)=>{return new Date(b.created_at.split("T")[0]) - new Date(a.created_at.split("T")[0])})}
    }
    
    if(loading==="loaded"){
        return (
            <>
            <SortArticles setButtonOrder={setButtonOrder} setSortBy={setSortBy}/>
            {articlesArr.map((article,index)=>{
                const created_at = article.created_at.split("T")
                return (
                    <Link to={`/articles/${article.article_id}`}  key={article.article_id}>
                        <article className="article">
                            <p>Title: {article.title}</p>
                            <p>Topic: {article.topic}</p>
                            <img src={article.article_img_url} className="article-img"/>
                            <p>Posted at: {created_at[0]}</p>
                            <p>Created by: {article.author}</p>
                            <p>Likes: {article.votes}</p>
                            <p>Comments: {article.comment_count}</p>
                        </article>
                    </Link>
                )
            }
            )}
            </>
        )
    }   
}

export default AllArticles