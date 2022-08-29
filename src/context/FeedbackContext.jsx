import { createContext, useState } from "react";
import React from 'react'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])

    const deleteFeedback = (id,text,rating) =>{
        console.log( 'App',id, text + rating)
        if(window.confirm('Are you sure you want  to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id)) // return items which doesnt have id 
        }
    }

    return <FeedbackContext.Provider value={{
        feedback, 
        deleteFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext