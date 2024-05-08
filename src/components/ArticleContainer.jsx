import Article from "./Article"
import UpdateArticleVotes from "./UpdateArticleVotes"
import ArticleComments from "./ArticleComments"


function ArticleContainer(){
    return (
        <>
        <Article/>
        <UpdateArticleVotes/>
        <ArticleComments/>
        </>
    )
}

export default ArticleContainer