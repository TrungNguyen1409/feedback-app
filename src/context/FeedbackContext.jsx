import { createContext, useState, useEffect } from "react";
import React from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    
    const[isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},   // feedback item to be edited
        edit: false // if button clicked => in edit mode (true)
    })


    useEffect(() =>{
        fetchFeedback()
    }, [])

    // Fetch feedback
    const fetchFeedback = async () =>{
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&:order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
        console.log(data)
    }


    // delete feedback
    const deleteFeedback = (id,text,rating) =>{
        console.log( 'App',id, text + rating)
        if(window.confirm('Are you sure you want  to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id)) // return items which doesnt have id 
        }
    }


    // add feedback
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


    // set item to be updated 
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // update feedback
    const updateFeedback = (id,updItem) =>{
        console.log(feedback.map((item) => (item.id===id ?{...item, ...updItem}: item))) // replace item with updItem
        console.log(feedback)
    }

    return <FeedbackContext.Provider value={{
        feedback, 
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext