import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleArticle } from "../api"

const SingleArticle = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSingleArticle(articleId)
      .then((data) => {
        setArticle(data)
        setLoading(false)
      })
  }, [articleId])

  if (loading) {
    return <p style={{fontSize: 40}}>Loading article...</p>
  }
  return (
    <div>
      <h1>{article.title}</h1>
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>
      <img src={article.article_img_url} width={200} alt="Article" />
      <p>Author: {article.author}</p>
      <p>Votes: {article.votes}</p>
    </div>
  )
}

export default SingleArticle