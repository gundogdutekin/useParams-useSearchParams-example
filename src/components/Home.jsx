import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <>
      <h1>Home</h1>
      <button onClick={()=>navigate('/contact')}>İletişim e Git</button>
    </>
    
  )
}

export default Home