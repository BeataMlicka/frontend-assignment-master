import { connect } from 'react-redux'

import { fetchFashionArticles } from '../../reducers/fashionArticlesReducer'
import { fetchSportsArticles } from '../../reducers/sportsArticlesReducer'

import ArticlesList from './ArticlesList'

const mapStateToProps = state => ({
  fashion: state.fashionArticlesReducer.fashion[0],
  sport: state.sportsArticlesReducer.sport[0],
})

const mapDispatchToProps = ({
  fetchFashionArticles,
  fetchSportsArticles,
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)
