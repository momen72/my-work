import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Services from './components/Services'
import Experience from './components/Experience'
// import Countercontext from './context/Countercontext'
import Countercontext from './context/Countercontext'
// import { useContext } from 'react'

const router =createBrowserRouter([
  {path:"" , element:<Layout/> , children:[
    {path:"",element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"login",element:<Login/>},
    {path:"services",element:<Services/>},
    {path:"signup",element:<Signup/>},
    {path:"*",element:<div>Erorr</div>},
  ]}
])
function App() {

  // const obj = useContext(Counter)
  // console.log(obj)
  return (
    <Countercontext>
      <RouterProvider router={router}/>
    </Countercontext>
  )
}

export default App
