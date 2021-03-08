import { FETCH_FASHION_ARTICLES, setFashionArticles } from "../actions"

const initialState = {
  fashion: {},
}

export const fashionArticlesReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_FASHION_ARTICLES: {
      return {...state, fashion: [...state.fashion, action.payload]}
    }
    default:
      return state
  }
}

export const fetchFashionArticles = () => async(dispatch) => {
  const response = await fetch('http://localhost:6010/articles/fashion')
  const articles = await response.json()
  dispatch(setFashionArticles(articles))
}
