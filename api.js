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
      return data.comments;
    })
  }