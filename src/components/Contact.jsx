import React from 'react'
import { useNavigate } from 'react-router-dom'
function Contact() {
    const navigate = useNavigate()
  return (
    <>
     <h1>Contact</h1>
     <button onClick={()=>navigate(-1)}>Geriye Git</button>
    </>
   
  )
}

export default Contact