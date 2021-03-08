import React from 'react'
import PropTypes from 'prop-types'

import './Checkbox.sass'

const Checkbox = ({ value, setCategory, text }) => (
  <div className='checkbox'>
    <div className='checkbox__box' onClick={() => setCategory(!value)}>
      { value ? 'X' : '' }
    </div>
    <div className='checkbox__text'>
      {text}
    </div>
  </div>
)

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  setCategory: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Checkbox
