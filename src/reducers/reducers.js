import { combineReducers } from 'redux'

import { fashionArticlesReducer } from './fashionArticlesReducer'
import { sportsArticlesReducer } from './sportsArticlesReducer'

const reducer = combineReducers({
  fashionArticlesReducer,
  sportsArticlesReducer
})

export default reducer
