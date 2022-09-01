import { createContext, useState, useEffect } from "react";
import React from 'react'

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
        const response = await fetch("http://localhost:5000/feedback?_sort=id&:order=desc")
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
        console.log(data)
    }


    // delete feedback
    const deleteFeedback = async (id,text,rating) =>{

        console.log( 'App',id, text + rating)
        if(window.confirm('Are you sure you want  to delete?')){
            //this DELETE request is specialized for json-server package. can be different in another cases
            await fetch(`http://localhost:5000/feedback/${id}`,{
            method: 'DELETE' })
            setFeedback(feedback.filter((item) => item.id !== id)) // return items which doesnt have id 
        }
    }


    // add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('http://localhost:5000/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFeedback),
        })
    
        const data = await response.json() // save the response from server (new feedback)
    
        setFeedback([data, ...feedback])
      }


    // set item to be updated 
    const editFeedback =  (item) =>{
        
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // update feedback
    const updateFeedback = async(id,updItem) =>{
        // 1. Update the server       2. Get response back         3. save the response in "data"
        const response = await fetch(`http://localhost:5000/feedback/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => (item.id===id ?data: item))) // replace item with updItem
        console.log(feedback)

        // bug: without these lines, you would just edit the same item even if you try to add new feedback
        
        setFeedbackEdit({
            item:{},
            edit: false
        })
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