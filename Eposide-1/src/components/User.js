import React, { useState } from 'react'

const User = (props) => {
    const [count,setcount]=useState(0)
    const [count2,setcount2]=useState(0)
  return (
    <div className='user'>
        <h1>{props.name}
        </h1>
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
        <h2>location</h2>
    </div>
  )
}

export default User
