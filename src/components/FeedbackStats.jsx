import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {

  
  let average = feedback.reduce((acc,cur)=>{
    return (acc + cur.rating)
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/,'') // regex: if the nachkomma is zero delete it

  console.log(feedback)
  console.log(feedback.length)
  console.log(average)
  return (
    <div className='feedback-stats'>
        
        <h4>{feedback.length} Review</h4>
        <h4>Average Rating: {isNaN(average) ? 0: average}</h4>
        
    Stats
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}


export default FeedbackStats

