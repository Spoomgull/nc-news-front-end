import axios from "axios"

function DeleteComment ({comment, loggedIn}){

const {comment_id} = comment
const {author} = comment

const handleClick = ()=>{
    if(author === loggedIn){
        axios.delete(`https://northcoders-news-api-bjpy.onrender.com/api/comments/${comment_id}`)
    }
}

return (
    <form onClick={handleClick}>
        <button type="submit">Delete comment</button>
    </form>
    )
}
export default DeleteComment