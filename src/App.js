import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import React from 'react'

import {useState} from 'react'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData) // app level state
    return(
        <>
            <Header/>
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
        
    )

}

export default App