import React from 'react'
import PropTypes from 'prop-types'

import './Article.sass'

const Article = ({ article }) => {

    console.log(article)
    return (
        <div className='article'>
            <div className='article__photo'>
                <img src={article.image} alt='' />
            </div>
            <div className='article__content'>
            </div>
        </div>
    )
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
}

export default Article
