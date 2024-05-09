import axios from "axios"

function DeleteComment ({comment}){

const {comment_id} = comment
const {author} = comment

const logIn = "grumpy19"

const handleClick = ()=>{
        if(author === logIn){

            axios.delete(`https://northcoders-news-api-bjpy.onrender.com/api/comments/${comment_id}`).then((response)=>{})
        }
}

return (
    <button onClick={handleClick}>Delete comment</button>
    )
}
export default DeleteComment