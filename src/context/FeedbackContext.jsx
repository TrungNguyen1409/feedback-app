import { createContext, useState } from "react";
import React from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is feedback item 2',
            rating: 8
        },
        {
            id: 3,
            text: 'This item is feedback item 3',
            rating: 9
        },
    ])

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

    return <FeedbackContext.Provider value={{
        feedback, 
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext