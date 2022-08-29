import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './components/pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
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
        <FeedbackProvider>
            <Router>
            <Header/>
            <div className="container">
            <Routes>
                <Route exact path='/' element ={
                    <>
                        <FeedbackForm handleAdd={addFeedback} />
                        <FeedbackStats feedback={feedback}/>
                        <FeedbackList feedback={feedback} list_handleDelete = {deleteFeedback}/>
                        <AboutIconLink />
                    </>
                }>
                    
                
                </Route>
                
                <Route path='/post/*' element={<Post/>}/>
                <Route path='/about' element={<AboutPage/>}/>

            </Routes>
                
            </div>
        </Router>
        </FeedbackProvider>
        
    )
}

export default App