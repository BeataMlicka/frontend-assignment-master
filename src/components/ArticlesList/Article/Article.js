import React from 'react'
import PropTypes from 'prop-types'

import './Article.sass'

const Article = ({ article }) => (
  <div className='article'>
    <div className='article__photo'>
      <img src={article.image} alt='' />
    </div>
    <div className='article__content'>
      <h3>
        {article.title}
      </h3>
      <span>
        {article.date}
      </span>
      <p>
        {article.preamble}
      </p>
    </div>
  </div>
)

Article.propTypes = {
  article: PropTypes.object.isRequired,
}

export default Article
