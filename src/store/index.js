import { createStore, applyMiddleware } from 'redux'
import { articlesReducer } from '../reducers/articlesReducer'
import thunk from 'redux-thunk'


export const store = createStore(articlesReducer, applyMiddleware(thunk))
