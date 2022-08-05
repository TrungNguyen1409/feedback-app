import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import React from 'react'

import {useState} from 'react'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData) // app level state
    
    // this function is here because the App.js is where we have the feedback
    const deleteFeedback = (id,text,rating) =>{
        console.log( 'App',id, text + rating)
        if(window.confirm('Are you sure you want  to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id)) // return items which doesnt have id 
        }
    }
    return(
        <>
            <Header/>
            <div className="container">
                <FeedbackList 
                feedback={feedback} 
                list_handleDelete = {deleteFeedback}
                />
            </div>
        </>
        
    )

}

export default App