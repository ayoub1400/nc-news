import { Link } from "react-router-dom"

const ShowArticle =  ({ article }) => {
    return (
        <div>
            <div className="top-of-article">
            <Link to={`/articles/${article.article_id}`}>
            <h2 className="article-title">{article.title}</h2>
            </Link>
            <p>Topic: {article.topic}</p>
            </div>
            <p className="article-body">{article.body}</p>
            <img src={article.article_img_url} width={300} alt='Article'></img>
            <p>Author: {article.author}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
        </div>
    )
}

export default ShowArticle