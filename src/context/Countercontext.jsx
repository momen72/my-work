import { useState} from "react"
import { useEffect } from "react"
import { Counter } from "./CounterProvider"

// export { Counter }
export default function Countercontext({children}) {

const[usertoken,setusertoken]=useState(null)
useEffect(functio)

function settoken(tkn){
    setusertoken(tkn) 
    console.log(usertoken)
    // كدة عشان ياخد التوكن
}
    
  return (
    <Counter.Provider value={{usertoken,settoken,setusertoken}}> 
    {/* استخدام يوزرتوكين عشان اخد التوكن  */}
      {children}
    </Counter.Provider>
  )
}
