import { useState } from "react"
import { Counter } from "./CounterProvider"


export default function Countercontext({children}) {

const[usertoken,setusertoken]=useState(null)

function settoken(tkn){
    setusertoken(tkn) 
    console.log(usertoken)
    // كدة عشان ياخد التوكن
}
    
  return (
    <Counter.Provider value={{usertoken,settoken}}> 
    {/* استخدام يوزرتوكين عشان اخد التوكن  */}
      {children}
    </Counter.Provider>
  )
}
