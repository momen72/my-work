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
import Categories from './components/Categories'
// import Countercontext from './context/Countercontext'
import Countercontext from './context/Countercontext'
import Protectrouting from './context/Protectrouting'
import Autionticated from './context/Autionticated'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Carddetail from './components/Carddetail'
import Wishlist from './components/Wishlist'
import { ToastContainer } from 'react-toastify'
// import { useContext } from 'react'

const router =createBrowserRouter([
  {path:"" , element:<Layout/> , children:[
    {path:"",element:<Home/>},
    {path:"home",element:<Protectrouting><Home/></Protectrouting>},
    {path:"categories",element:<Protectrouting><Categories/></Protectrouting>},
    {path:"carddetail/:id",element:<Protectrouting><Carddetail/></Protectrouting>},
    {path:"wishlist",element:<Protectrouting><Wishlist/></Protectrouting>},
    {path:"login",element:<Autionticated><Login/></Autionticated>},
    {path:"services",element:<Protectrouting><Services/></Protectrouting>},
    {path:"signup",element:<Autionticated><Signup/></Autionticated>},
    {path:"*",element:<div>Erorr</div>},
  ]}
])

const myqueryClient = new QueryClient()

function App() {

  // const obj = useContext(Counter)
  // console.log(obj)
  return (
    <QueryClientProvider client={myqueryClient}>
      <Countercontext>
        <RouterProvider router={router}/>
      </Countercontext>
      <ToastContainer/>
    </QueryClientProvider>
    
  )
}

export default App
