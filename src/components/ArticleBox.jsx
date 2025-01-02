import { patchArticleVotes } from "../../api"
import ShowArticle from "./ShowArticle"
import { useState } from "react"

const ArticleBox = ({ article }) => {
  const [votes, setVotes] = useState(article.votes)
  const [error, setError] = useState(null)

  const incVote = () => {
    setVotes((prevVotes) => prevVotes + 1)
    patchArticleVotes(article.article_id, 1)
      .catch(() => {
        setError("Try again")
        setVotes((prevVotes) => prevVotes - 1)
      })
  }

  return (
    <div className="article-box">
      <ShowArticle article={{ ...article, votes }} />
      <button onClick={incVote}>👍</button>
      {error && <p>{error}</p>}
    </div>
  )
}

export default ArticleBox