import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import axios from 'axios'

const registerSchema = zod.object({
    name: zod.string().nonempty("username is required").min(3,"ZOD: must be more than this"),
    email: zod.email("email is not in format"),
    dateOfBirth: zod.string().nonempty("date is required"),
    password: zod.string().nonempty("password is required"),
    rePassword: zod.string().nonempty("repassword is required"),
    gender: zod.enum(['male', 'female']),
}).refine(function(obj){
    return obj.password === obj.rePassword
}, {path: ['rePassword'], message: "Password is not correct"})

export default function Signup() {
    const {handleSubmit , register , formState} = useForm({
        mode:'onBlur',
        resolver: zodResolver(registerSchema)
    })
// function handel(e){
// e.preventDefault() // كدة منع عمل ريفريش للموقع  من خلال انه ما يخدش الداتا
// }

const [success , setsuccess] = useState(false)
const [faluire , setfaluire] = useState(null)

function mysubmit (value){
console.log("submit " , value)
axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , value).
then(function(){
    setsuccess(true)
        setTimeout(() => {
        setsuccess(false)
    }, 2000);
    },
).
catch(
    function(err){
        console.log(err.response.data.message)
        setfaluire(err.response.data.message)
                setTimeout(() => {
        setfaluire(null)
    }, 3000);
    }
)
}


  return (
    <div className='bg-black text-white flex flex-col items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-10 '>
        

    {
        success && (<div className='text-center bg-green-500 mt-20  text-white m-auto p-1 w-3/4 rounded'>congratulation</div>)

    }
    {
        faluire && (<div className='text-center bg-red-500 mt-20 text-white m-auto p-1 w-3/4 rounded'>{faluire}</div>)

    }
      <form onSubmit={handleSubmit(mysubmit)} action="" className='w-3/4 mx-auto mt-32'>
        <h1 className='text-3xl font-bold'>Sign up Page</h1>

        <div className="flex-wrap mt-3">
            <label htmlFor="user">User name</label>
            <input id='user'{...register("name" )} 
                // {required:{value:true, message:"full your input"} , minLength:3 , maxLength:18})}
                 type="text" className='p-1.5 w-full border-amber-950-50 border-2 rounded' placeholder='Username...' />
            
            {formState.touchedFields.name && formState.errors.name && <p className='text-red-600'>{formState.errors.name.message}</p>}
        </div>
        <div className="flex-wrap mt-3">
            <label htmlFor="email">E-mail</label>
            <input id='email' {...register("email")}
            //  ,  {required:{value:true, message:"full your input"} , minLength:3 , maxLength:18})}
              type="email" className='p-1.5 w-full border-amber-950-50 border-2 rounded' placeholder='EX: momen@gmail.com' />
            {/* <p className='text-red-600'>{formState.errors.name?.message}</p> */}
            {formState.touchedFields.email && formState.errors.email && <p className='text-red-600'>{formState.errors.email.message}</p>}


        </div>
        <div className="flex-wrap mt-3">
            <label htmlFor="dateOfBirth">dateOfBirth</label>
            <input id='dateOfBirth' {...register("dateOfBirth")}
            //  ,  {required:{value:true, message:"full your input"} , minLength:3 , maxLength:18})}
              type="date" className='p-1.5 w-full border-amber-950-50 border-2 rounded' placeholder='1-8-2001' />
            {/* <p className='text-red-600'>{formState.errors.name?.message}</p> */}
            {formState.touchedFields.dateOfBirth && formState.errors.dateOfBirth && <p className='text-red-600'>{formState.errors.dateOfBirth.message}</p>}


        </div>
        <div className="flex-wrap mt-3">
            <label htmlFor="password">Password</label>
            <input id='password' {...register("password")} type="password" className='p-1.5 w-full border-amber-950-50 border-2 rounded' placeholder='******' />
            {formState.touchedFields.password && formState.errors.password && <p className='text-red-600'>{formState.errors.password.message}</p>}
            
        </div>
        <div className="flex-wrap mt-3">
            <label htmlFor="confirm-password">Confirm-Password</label>
            <input id='confirm-password' {...register("rePassword")} type="password" className='p-1.5 w-full border-amber-950-50 border-2 rounded' placeholder='*****' />
            {formState.touchedFields.rePassword && formState.errors.rePassword && <p className='text-red-600'>{formState.errors.rePassword.message}</p>}
        </div>
        <div className="flex mt-3 items-center">
            <label htmlFor="male">Male</label>
            <input name='gender' id='male' type="radio" {...register("gender")}
            //  ,  {required:{value:true, message:"full your input"}})}
              value="male" className=' ms-3 mt-1' placeholder='*****' />
        </div>
        <div className="flex mt-3 items-center">
            <label htmlFor="female">Female</label>
            <input name='gender' id='female' type="radio" {...register("gender")} value="female" className='ms-3 mt-1' placeholder='*****' />
        </div>

    <button type='submit' className='my-2 border-2 border-blue-500 p-4 w-3/15 rounded-2xl text-blue-500 hover:bg-blue-500 hover:text-white duration-300 cursor-pointer'>Submit</button>

      </form>   
    </div>
  )
}
