import React, { useContext } from 'react'
import Countercontext from './Countercontext'
import { Counter } from './CounterProvider';
import { Navigate } from 'react-router-dom';

export default function Protectrouting({children}) {
    const { usertoken } = useContext(Counter);
    if (usertoken === null) {
        return <Navigate to="/login" />
    }
  return (
    <>
    {children}
    </>
  )
}

// condition middleware for protected routes