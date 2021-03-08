import { connect } from 'react-redux'

import { fetchFashionArticles } from '../../reducers/fashionArticlesReducer'
import { fetchSportsArticles } from '../../reducers/sportsArticlesReducer'

import ArticlesList from './ArticlesList'

const mapStateToProps = state => ({
  event: state.event,
})

const mapDispatchToProps = ({
  fetchFashionArticles,
  fetchSportsArticles,
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)
