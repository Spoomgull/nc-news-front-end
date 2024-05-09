import Article from "./Article"
import UpdateArticleVotes from "./UpdateArticleVotes"
import ArticleComments from "./ArticleComments"
import NewArticleComments from "./NewArticleComments"

function ArticleContainer(){
    return (
        <>
        <Article/>
        <UpdateArticleVotes/>
        <NewArticleComments/>
        <ArticleComments/>
        </>
    )
}

export default ArticleContainer