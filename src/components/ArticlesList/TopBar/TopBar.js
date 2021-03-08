import React from 'react'
import PropTypes from 'prop-types'

import './TopBar.sass'

const ASC = 'asc'
const DESC = 'desc'

const TopBar = ({ setOrder }) => {

  const arrows = (
    <div className='arrows'>
      <div className='arrows__arrow-up' onClick={() => setOrder(ASC)} />
      <div className='arrows__arrow-down' onClick={() => setOrder(DESC)} />
    </div>
  )

  return (
    <div className='top-bar'>
      <p>Sort by date:</p>
      {arrows}
    </div>
  )
}

TopBar.propTypes = {
  setOrder: PropTypes.func.isRequired,
} 

export default TopBar
