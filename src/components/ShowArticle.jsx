const ShowArticle =  ({ article }) => {
    return (
        <div>
            <div className="top-of-article">
            <h2 className="article-title">{article.title}</h2>
            <p>{article.topic}</p>
            </div>
            <p className="article-body">{article.body}</p>
            <img src={article.article_img_url} width={300} alt='Article'></img>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Author: {article.author}</p>
        </div>
    )
}

export default ShowArticle