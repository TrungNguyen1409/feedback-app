import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import Button from "./components/shared/Button"
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

    const addFeedback = (newFeedback)=>{
        newFeedback.id= uuidv4() // add id to it. There wasn't any id
        
        // this is very important:
        /* 
            basicall taking the new feedback and add it to the main array (which is FeedbackData)
            this step must be executed here bc in App.js lies the main State
        */
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    }
    return(
        <>
            <Header/>
            <div className="container">
                <Button/>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback}/>
                <FeedbackList 
                feedback={feedback} 
                list_handleDelete = {deleteFeedback}
                />
                
            </div>
        </>
        
    )

}

export default App