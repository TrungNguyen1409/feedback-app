import React from 'react'

function FeedbackStats({feedback}) {

  
  let average = feedback.reduce((acc,cur)=>{
    return (acc + cur.rating)
  }, 0) / feedback.length

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

export default FeedbackStats

