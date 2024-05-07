import { useEffect,useState } from "react"



function Articles(){
    const [articlesArr, setArticlesArr] = useState([])
    useEffect(()=>{
        fetch("https://northcoders-news-api-bjpy.onrender.com/api/articles").then((response)=>{
            return response.json()
        }).then(({articles})=>{
            setArticlesArr(articles)
        })
    },[])

    if(articlesArr.length){
        return (
            <>
            {articlesArr.map((article, index)=>{
                return (
                <button>
                    <div key={index}className="article">
                        <li>Title: {article.title}</li>
                        <li>Topic: {article.topic}</li>
                        <img src={article.article_img_url} className="article-img"/>
                        <li>Posted at: {article.created_at}</li>
                        <li>Created by: {article.author}</li>
                        <li>Likes: {article.votes}</li>
                        <li>Comments: {article.comment_count}</li>
                    </div>
                </button>
            )
            })}
            </>
        )
    }
}


export default Articles