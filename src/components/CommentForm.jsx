import { useState } from "react"
import { postComment } from "../../api"


const CommentForm = ({ articleId, onCommentPosted }) => {
  const [author, setAuthor] = useState("")
  const [body, setBody] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!author || !body) {
      setError("Both fields are required.")
      return
    }

    setLoading(true)
    setError(null)

    postComment(articleId, { author, body })
      .then((newComment) => {
        onCommentPosted(newComment)
        setAuthor("")
        setBody("")
      })
      setLoading(false)
  }

  return (
    <div className="post-comment">
    <form onSubmit={handleSubmit} className="comment-form">
      <h3>Leave a Comment</h3>
      {error && <p className="error">{error}</p>}
      <label>
        Name:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          disabled={loading}
        />
      </label>
      <label>
        Comment:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          disabled={loading}
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Post Comment"}
      </button>
    </form>
    </div>
  )
}

export default CommentForm