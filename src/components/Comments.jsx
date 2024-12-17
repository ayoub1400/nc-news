import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../api";

const Comments = ({ articleId }) => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getCommentsByArticleId(articleId)
          .then((data) => {
            setComments(data)
            setLoading(false)
          })
      }, [articleId])
    
      if (loading) { 
        return <p style={{fontSize: 40}}>Loading comments...</p>
      }
    
      return (
        <div className="comments-section">
          <h2>Comments</h2>
          <ul>
            {comments.map((comment) => (
              <ul key={comment.comment_id} className="comment-box">
                <p>Author: {comment.author}</p>
                <p>Votes: {comment.votes}</p>
                <p>{comment.body}</p>
              </ul>
            ))}
          </ul>
        </div>
      )
    
}

export default Comments