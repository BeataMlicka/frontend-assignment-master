import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import Article from './Article'

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

  const articles = useMemo(() => {
    const articles = []
    if (!isEmpty(fashion) && !isEmpty(sport)) return [...fashion.articles, ...sport.articles]

    return []
  }, [fashion, sport])

  if (isEmpty(articles)) return null
  return (
    <div className='articles-list'>
        {articles.map(item => <Article article={item} />)}
    </div>
  )
}

ArticlesList.defaultProps = {
  faschion: {},
  sport: {},
}

ArticlesList.propTypes = {
  faschion: PropTypes.object.isRequired,
  fetchFashionArticles: PropTypes.func.isRequired,
  fetchSportsArticles: PropTypes.func.isRequired,
  sport: PropTypes.object.isRequired,
}

export default ArticlesList
