import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import TopBar from './TopBar'
import Article from './Article'
import Sidebar from './Sidebar'

import './ArticlesList.sass'
import { orderBy } from 'lodash'

const MONTHS_MAP = {
  'januar': '01',
  'februar': '02',
  'mai': '05',
  'september': '09',
  'oktober': '10',
  'november': '11',
  'desember': '12',
}

const getDate = (date) => {
  const newDate = date.replace('.', '').split(" ")
  const day = newDate[0]
  const month = MONTHS_MAP[newDate[1]]
  const year = newDate[2]

  return { year, month, day }
}

const ArticlesList = ({
    fashion,
    fetchFashionArticles,
    fetchSportsArticles,
    sport,
}) => {
  const [order, setOrder] = useState('desc')
  const [activeCategories, setActiveCategories] = useState({ sport: true, fashion: true })

  useEffect(() => {
    fetchFashionArticles()
    fetchSportsArticles()
  }, [])

  const articles = useMemo(() => {
    let newArticlesList = []
    if (fashion && fashion.articles && activeCategories.fashion) newArticlesList = [...newArticlesList, ...fashion.articles]
    if (sport && sport.articles && activeCategories.sport) newArticlesList = [...newArticlesList, ...sport.articles]

    if (!isEmpty(newArticlesList)) {
        const sortedList = newArticlesList.map((item) => {
            return ({
                ...item,
                year: getDate(item.date).year,
                month: getDate(item.date).month,
                day: getDate(item.date).day,
            })
        })

        return orderBy(sortedList, ['year', 'month', 'day'], [order, order, order])
    }

    return []
  }, [activeCategories, fashion, order, sport])

  return (
    <div className='articles-list'>
        <TopBar setOrder={setOrder} />
        <Sidebar activeCategories={activeCategories} setActiveCategories={setActiveCategories} />
        <div className='articles-list__container'>
            {
              isEmpty(articles)
                ? <h4>There are no articles :(</h4>
                : articles.map(item => <Article key={item.id} article={item} />)
            }        
        </div>
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
