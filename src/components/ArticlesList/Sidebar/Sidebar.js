import React from 'react'

import Checkbox from './Checkbox'

import './Sidebar.sass'

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <p>Data sources:</p>
            <Checkbox value={true} text='Fashion' />
            <Checkbox value={false} text='Sport' />
        </div>
    )
}

export default Sidebar
