import { FETCH_FASHION_ARTICLES, setFashionArticles } from "../actions"

const initialState = {
  articles: [],
}

export const fashionArticlesReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_FASHION_ARTICLES: {
      return {...state, articles: [...state.articles, action.payload]}
    }
    default:
      return state
  }
}

export const fetchFashionArticles = () => async(dispatch) => {
  const articles = await fetch('http://localhost:6010/articles/fashion').then((res) => res.json())
  dispatch(setFashionArticles(articles))
}
