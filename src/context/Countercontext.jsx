import { createContext, useState } from "react"

export const Counter = createContext()

export default function Countercontext({children}) {

const[usertoken,setusertoken]=useState(null)

function settoken(tkn){
    setusertoken(tkn) 
    // كدة عشان ياخد التوكن
}
    
  return (
    <Counter.Provider value={{usertoken,settoken}}> 
    {/* استخدام يوزرتوكين عشان اخد التوكن  */}
      {children}
    </Counter.Provider>
  )
}
