import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

function NewArticleComments({loggedIn}){
    
    const [users, setUsers] = useState([])
    const [newComment, setNewComment] = useState("")
    
    const article = useParams()
    const articleChoice = article.article_id

const handleSubmit = () => {
    axios.get("https://northcoders-news-api-bjpy.onrender.com/api/users").then((response)=>{
        setUsers(response.data.users)
    })
    users.map((user)=>{
        if(user===loggedIn){}
    })
    axios.post(`https://northcoders-news-api-bjpy.onrender.com/api/articles/${articleChoice}/comments`,{
        username:loggedIn,
        body:newComment
    })
}
return <form onClick={handleSubmit}>
    <label>Comment here: </label>
    <input type="text" name="body" value={newComment} onChange={(event)=>{setNewComment(event.target.value)}}/>
    <button type="submit">Submit</button>
    </form>
}

export default NewArticleComments