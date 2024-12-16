import { useEffect, useState } from "react"
import { getArticles } from "../../api"
import ArticleBox from "./ArticleBox"

const ArticleList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((data) => {
            setArticles(data)
        })
    }, [])

    return (
         <ul className="articles-list">
            {articles.map((article) => {
                return <ArticleBox key={article.article_id} article={article}/>
            })}
         </ul>
    )
}

export default ArticleList