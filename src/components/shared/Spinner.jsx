import React from 'react'
import spinner from '../assets/spinner.gif'

function Spinner() {
  return <img src={spinner} alt='Loading...' style={{paddingTop:'150px', width: '100px', margin: 'auto', display:'block'}}/>
}

export default Spinner