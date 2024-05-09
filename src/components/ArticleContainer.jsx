import Article from "./Article"
import UpdateArticleVotes from "./UpdateArticleVotes"
import ArticleComments from "./ArticleComments"
import NewArticleComments from "./NewArticleComments"
import { useState } from "react"


function ArticleContainer(){
    return (
        <>
        <Article/>
        <UpdateArticleVotes/>
        <NewArticleComments/>
        <ArticleComments />
        </>
    )
}

export default ArticleContainer