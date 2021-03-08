import { FETCH_SPORTS_ARTICLES, setSportsArticles } from "../actions"

const initialState = {
  articles: [],
}

export const sportsArticlesReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SPORTS_ARTICLES: {
      return {...state, articles: [...state.articles, action.payload]}
    }
    default:
      return state
  }
}

export const fetchSportsArticles = () => async(dispatch) => {
  const articles = await fetch('http://localhost:6010/articles/sports').then((res) => res.json())
  dispatch(setSportsArticles(articles))
}
