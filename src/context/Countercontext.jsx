import { useState} from "react"
import { Counter } from "./CounterProvider"

// export { Counter }
export default function Countercontext({children}) {

const[usertoken,setusertoken]=useState(function() {
  return localStorage.getItem('token') })
  // useEffect(function() {
  //   const mynewValue = localStorage.getItem('token')
  //   if (mynewValue !== null) {
  //     setusertoken(mynewValue)
  //   }
  // }, [])
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
