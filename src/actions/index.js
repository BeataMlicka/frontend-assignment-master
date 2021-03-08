export const FETCH_FASHION_ARTICLES = 'FETCH_FASHION_ARTICLES'
export const FETCH_SPORTS_ARTICLES = 'FETCH_SPORTS_ARTICLES'

export const setFashionArticles = (articles) => ({
  type: FETCH_FASHION_ARTICLES,
  payload: articles,
})

export const setSportsArticles = (articles) => ({
  type: FETCH_SPORTS_ARTICLES,
  payload: articles,
})
