import axios from "axios";

const api = axios.create({
    baseURL: 'https://ayoubs-news.onrender.com/api'
})

export const getArticles = () => {
    return api.get('/articles').then(({ data }) => {
        return data.articles
    })
}

export const getSingleArticle = (articleId) => {
    return api.get(`/articles/${articleId}`).then(({ data }) => {
      return data.article
    })
  }

  export const getCommentsByArticleId = (articleId) => {
    return api.get(`/articles/${articleId}/comments`).then(({ data }) => {
      return data.comments
    })
  }

  export const patchArticleVotes = (articleId, increment) => {
    return api.patch(`/articles/${articleId}`, { inc_votes: increment })
      .then(({ data }) => {
      return data.article
    })
  }

  export const postComment = (articleId, comment) => {
    return api
      .post(`/articles/${articleId}/comments`, {
        body: comment.body,
        username: comment.author,
      })
      .then(({ data }) => {
        console.log(data.comment)
        return data.comment
      })
  }

  export const deleteComment = (commentId) => {
    return api.delete(`/comments/${commentId}`).then(() => {
      return commentId
    })
  }