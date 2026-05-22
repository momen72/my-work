import React, { useContext } from 'react'
import { Counter } from './CounterProvider';
import { Navigate } from 'react-router-dom';
export default function Autionticated({children}) {
    const { usertoken } = useContext(Counter);
    if (usertoken !== null) {
        return <Navigate to="/home" />
    }
  return (
    <>
      {children}
    </>
  )
}
