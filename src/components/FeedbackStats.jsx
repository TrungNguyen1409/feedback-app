import React from 'react'

function FeedbackStats({feedback}) {
  return (
    <div className='feedback-stats'>
        
        <h4>{feedback.length} Review</h4>
        <h4>Average Rating: {feedback.forEach}</h4>
        
    Stats
    </div>
  )
}

export default FeedbackStats