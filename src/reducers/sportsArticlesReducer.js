import { FETCH_SPORTS_ARTICLES, setSportsArticles } from "../actions"

const initialState = {
  sport: {},
}

export const sportsArticlesReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SPORTS_ARTICLES: {
      return {...state, sport: [...state.sport, action.payload]}
    }
    default:
      return state
  }
}

export const fetchSportsArticles = () => async(dispatch) => {
  const response = await fetch('http://localhost:6010/articles/sports')
  const articles = await response.json()
  dispatch(setSportsArticles(articles))
}
