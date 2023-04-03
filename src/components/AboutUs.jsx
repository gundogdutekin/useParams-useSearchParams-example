import React from 'react'
import { useNavigate } from 'react-router-dom'
function AboutUs() {
    const navigate = useNavigate()
  return (
    <>
     <h1>AboutUs</h1>
     <button onClick={()=>navigate(-1)}>Geriye Git</button>
    </>
   
  )
}

export default AboutUs