import { useEffect, useState } from "react"
import { getArticles } from "../../api"
import ArticleBox from "./ArticleBox"

const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArticles().then((data) => {
            setArticles(data)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <p style={{fontSize: 40}}>Loading articles...</p>
    }

    return (
         <ul className="articles-list">
            {articles.map((article) => {
                return <ArticleBox key={article.article_id} article={article}/>
            })}
         </ul>
    )
}

export default ArticleList