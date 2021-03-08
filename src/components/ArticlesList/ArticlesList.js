import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import './ArticlesList.sass'

const ArticlesList = ({
    fashion,
    fetchFashionArticles,
    fetchSportsArticles,
    sport,
}) => {
  useEffect(() => {
    fetchFashionArticles()
    fetchSportsArticles()
  }, [])

  return (
    <div className='articles-list'>
        Hello World
    </div>
  )
}

ArticlesList.propTypes = {
  fashionArticles: PropTypes.object.isRequired,
  fetchFashionArticles: PropTypes.func.isRequired,
  fetchSportsArticles: PropTypes.func.isRequired,
  sportsArticles: PropTypes.object.isRequired,
}

export default ArticlesList
