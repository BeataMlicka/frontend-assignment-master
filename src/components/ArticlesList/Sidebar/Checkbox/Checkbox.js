import React from 'react'
import PropTypes from 'prop-types'

import './Checkbox.sass'

const Checkbox = ({ value, text }) => (
  <div className='checkbox'>
    <div className='checkbox__box'>
      {
        value
          ? 'X'
          : ''
      }
    </div>
    <div className='checkbox__text'>
      {text}
    </div>
  </div>
)

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Checkbox
