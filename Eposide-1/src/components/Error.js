


import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=useRouteError();
  return (<>
    <div className='flex justify-center text-2xl font-bold'>Error</div>
    <h1 className='text-xl font-bold text-center'>{err.status}:{err.statusText}</h1>
    </>
  )
}

export default Error
