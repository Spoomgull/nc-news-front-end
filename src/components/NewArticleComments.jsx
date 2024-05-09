import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function NewArticleComments(){
    const article = useParams()
    const articleChoice = article.article_id
    const commentAuthor = "grumpy19"

    const [newComment, setNewComment] = useState("")

const handleSubmit = (event) => {


    axios.post(`https://northcoders-news-api-bjpy.onrender.com/api/articles/${articleChoice}/comments`,{
        username:commentAuthor,
        body:newComment
    }).then((response)=>{
    })
}
return <form onSubmit={handleSubmit}>
    <label>Comment here: </label>
    <input type="text"name="body" value={newComment} onChange={(event)=>{setNewComment(event.target.value)}}/>
    <button type="submit">Submit</button>
    </form>
}

export default NewArticleComments