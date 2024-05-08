import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function UpdateArticleVotes (){
    const article = useParams()
    const articleChoice = article.article_id
    let votes = 0
    let [newVotes, setNewVotes] = useState(votes)
    useEffect(()=>{
        axios.patch(`https://northcoders-news-api-bjpy.onrender.com/api/articles/${articleChoice}`,{inc_votes: newVotes})
    .then((response)=>{
        
    })
},[newVotes])
    return (
        <>
        <br/>
        <button key ="like" onClick={()=>{setNewVotes(1)}}>Like</button>
        <button key ="dislike" onClick={()=>{setNewVotes(-1)}}>Dislike</button>
        <br/>
        </>
    )
}

export default UpdateArticleVotes