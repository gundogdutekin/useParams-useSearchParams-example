import React from 'react'
import { useParams } from 'react-router-dom'

function Member() {
    const {id} = useParams()
    let name = ''
    if(parseInt(id) === 1){
       name="Tekin Gündoğdu"
    }else if(parseInt(id) === 2){
       name="Emin Burak Gündoğdu"
    }
  return (
    <> 
        <h1>Members Details</h1>
        <h2>{name}</h2>
    </>
   

  )
}

export default Member