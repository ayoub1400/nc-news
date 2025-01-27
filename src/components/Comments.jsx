import { useState } from "react";
import { deleteComment } from "../../api"

const Comments = ({ comments }) => {
    
  if (!comments.length) {
    return <p style={{ fontSize: 40 }}>No comments yet...</p>;
  }

  const [deletingCommentId, setDeletingCommentId] = useState(null);

  const handleDelete = (commentId) => {
    setDeletingCommentId(commentId);
    deleteComment(commentId)
      .then(() => {
        onCommentDeleted(commentId)
        setDeletingCommentId(null)
      })
      .catch((err) => {
        console.error(err);
        setDeletingCommentId(null)
      });
  };
    
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