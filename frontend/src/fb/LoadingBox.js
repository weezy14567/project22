import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


function LoadingBox() {

  return (
    <div className='text-center'>
       <Spinner animation="border" variant="white" />
    </div>
  )
}

export default LoadingBox
