import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import React from 'react'


function FeedbackList({feedback, list_handleDelete}) {
if (!feedback || feedback.length === 0 ){
    return <p>No Feedback yet</p>
}  

  return <div className="feedback-list">
    {feedback.map((item)=>(
        <FeedbackItem 
        key={item.id} 
        item = {item}
        item_handleDelete = { list_handleDelete}
        />
    ))}
  </div>  
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList