const Comments = ({ comments }) => {
    
  if (!comments.length) {
    return <p style={{ fontSize: 40 }}>No comments yet...</p>;
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