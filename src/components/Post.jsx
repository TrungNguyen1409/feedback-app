import React from 'react'
import {Navigate, useNavigate, Route, Routes} from 'react-router-dom'

function Post() {
    const status = 200
    const navigate = useNavigate()

    const onClick = () => {
        console.log('Hello')
        navigate('/about')
    }

    if (status === 404){
        return <Navigate to='/notfound'></Navigate>
    }


  return (
    <div>
        <h1>Post</h1>
        <button onClick={onClick}>click</button>
        <Routes>
            <Route path='/show' element={<h1>Hello world</h1>}></Route>
        </Routes>
    </div>
  )
}

export default Post