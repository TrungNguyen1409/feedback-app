import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item, item_handleDelete}) {
    const handleClick = (id) => {
        console.log(id)
    }
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => item_handleDelete(item.id,item.text,item.rating)} className='close'>
            <FaTimes color = 'purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem