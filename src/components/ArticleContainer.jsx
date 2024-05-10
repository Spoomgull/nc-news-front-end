import Article from "./Article"
import UpdateArticleVotes from "./UpdateArticleVotes"
import ArticleComments from "./ArticleComments"
import NewArticleComments from "./NewArticleComments"
import { useState } from "react"
import ErrorArticle from "./ErrorArticle"


function ArticleContainer(){
    const [loggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState(null)

    if(error){return <ErrorArticle/>}

    return (
        <>
        <form>
            <label htmlFor="username">Log in:</label>
            <input type="text" name="body" id="username"onChange={(event)=>{setLoggedIn(event.target.value)}}></input>
        </form>
        <Article setError={setError} error={error}/>
        <UpdateArticleVotes/>
        <NewArticleComments loggedIn={loggedIn}/>
        <ArticleComments loggedIn={loggedIn}/>
        </>
    )
}

export default ArticleContainer