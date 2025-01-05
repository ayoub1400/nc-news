import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCommentsByArticleId, getSingleArticle } from "../../api"
import Comments from "./Comments"
import CommentForm from "./CommentForm"

const SingleArticle = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])

  useEffect(() => {
    getSingleArticle(articleId).then((data) => {
      setArticle(data)
      setLoading(false)
    })
    getCommentsByArticleId(articleId).then((data) => {
      setComments(data)
    })
  }, [articleId])



  const handleNewComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments])
  }

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
       <Comments comments={comments} />
       <CommentForm articleId={article.article_id} onCommentPosted={handleNewComment} />
    </div>
  )
}

export default SingleArticle