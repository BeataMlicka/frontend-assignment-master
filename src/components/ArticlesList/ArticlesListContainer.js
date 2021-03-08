import { connect } from 'react-redux'

import { fetchFashionArticles } from '../../reducers/fashionArticlesReducer'
import { fetchSportsArticles } from '../../reducers/sportsArticlesReducer'

import ArticlesList from './ArticlesList'

const mapStateToProps = state => ({
  fashionArticles: state.fashionArticlesReducer.articles,
  sportsArticles: state.sportsArticlesReducer.articles,
})

const mapDispatchToProps = ({
  fetchFashionArticles,
  fetchSportsArticles,
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)
