import { FETCH_SPORTS_ARTICLES, setSportsArticles } from "../actions"

const initialState = {
  sportsArticles: [],
  fashionArticles: [],
}

export const articlesReducer = (state = initialState, action) => {
    switch(action.type){
      case FETCH_SPORTS_ARTICLES: {
        return {...state, sportsArticles: [...state.sportsArticles, action.payload]}
      }
      case FETCH_FASHION_ARTICLES: {
        return {...state, fashionArticles: [...state.fashionArticles, action.payload]}
      }
      default:
        return state
    }
  }

export const fetchFashionArticles = () => async(dispatch) => {
  const articles = await fetch('http://localhost:6010/articles/fashion').then((res) => res.json())
  dispatch(setFashionArticles(articles))
}

export const fetchSportsArticles = () => async(dispatch) => {
  const articles = await fetch('http://localhost:6010/articles/sports').then((res) => res.json())
  dispatch(setSportsArticles(articles))
}
