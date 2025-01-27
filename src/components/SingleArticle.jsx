import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCommentsByArticleId, getSingleArticle } from "../../api"
import Comments from "./Comments"
import CommentForm from "./CommentForm"

  const SingleArticle = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState([]);
    const [currentUser, setCurrentUser] = useState("butter_bridge")
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getSingleArticle(articleId).then((data) => {
        setArticle(data);
        setLoading(false);
      });
      getCommentsByArticleId(articleId).then((data) => {
        setComments(data);
      });
    }, [articleId]);
  
    const handleNewComment = (newComment) => {
      setComments((prevComments) => [newComment, ...prevComments]);
    };
  
    const handleCommentDeleted = (commentId) => {
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.comment_id !== commentId)
      );
    };
  
    if (loading) {
      return <p style={{ fontSize: 40 }}>Loading article...</p>;
    }
  
    return (
      <div>
        <h1>{article.title}</h1>
        <p>Topic: {article.topic}</p>
        <p>{article.body}</p>
        <img src={article.article_img_url} width={200} alt="Article" />
        <p>Author: {article.author}</p>
        <p>Votes: {article.votes}</p>
        <Comments
          comments={comments}
          currentUser={currentUser}
          onCommentDeleted={handleCommentDeleted}
        />
        <CommentForm articleId={article.article_id} onCommentPosted={handleNewComment} />
      </div>
    );
  };
export default SingleArticle