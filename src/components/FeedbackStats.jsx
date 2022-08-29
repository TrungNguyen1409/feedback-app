import React from 'react'
import FeedbackContext from '../context/FeedbackContext' 
import {useContext} from 'react'

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)
  
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




export default FeedbackStats

