import ShowArticle from "./ShowArticle"

const ArticleBox = ({ article }) => {
return (
    <div className="article-box">
        <ShowArticle article={article}/>
    </div>
)
}

export default ArticleBox