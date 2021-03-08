import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from './Checkbox'

import './Sidebar.sass'

const Sidebar = ({ activeCategories, setActiveCategories }) => {
  const setFashion = (value) => setActiveCategories({ ...activeCategories, fashion: value })
  const setSport = (value) => setActiveCategories({ ...activeCategories, sport: value })

  return (
    <div className='sidebar'>
      <p>Data sources:</p>
      <Checkbox value={activeCategories.fashion} text='Fashion' setCategory={setFashion}  />
      <Checkbox value={activeCategories.sport} text='Sport' setCategory={setSport} />
    </div>
  )
}

Sidebar.propTypes = {
  activeCategories: PropTypes.object.isRequired,
  setActiveCategories: PropTypes.func.isRequired,
}

export default Sidebar
