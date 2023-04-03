import React from 'react'
import { useNavigate } from 'react-router-dom'
function ErrorPage() {
    const navigate = useNavigate()
  return (
    <>
      <h1>Error Page</h1>
      <button onClick={()=>navigate(-1)}>Geri</button>
    </>
    
  )
}

export default ErrorPage