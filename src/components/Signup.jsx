import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

const registerSchema = zod.object({
  name: zod.string().nonempty("Username is required").min(3, "Must be at least 3 characters"),
  email: zod.string().email("Email is not in correct format"),
  phone: zod.string().nonempty("Phone is required").regex(/^01[0125][0-9]{8}$/, "Enter a valid Egyptian phone number"),
  password: zod.string().nonempty("Password is required").min(6, "Password must be at least 6 characters"),
  rePassword: zod.string().nonempty("Please confirm your password"),
}).refine(function (obj) {
  return obj.password === obj.rePassword
}, { path: ['rePassword'], message: "Passwords do not match" })

export default function Signup() {
  const { handleSubmit, register, formState } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(registerSchema)
  })

  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(null)

  function mysubmit(value) {
    console.log("submit", value)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', value)
      .then(function () {
        setSuccess(true)
        setTimeout(() => setSuccess(false), 2000)
      })
      .catch(function (err) {
        console.log(err.response.data.message)
        setFailure(err.response.data.message)
        setTimeout(() => setFailure(null), 3000)
      })
  }

  const inputClass = 'p-2 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black'
  const errorClass = 'text-red-500 text-sm mt-1'

  return (
    <div className='bg-black text-white flex flex-col items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-10'>

      {success && (
        <div className='text-center bg-green-500 mt-20 text-white m-auto p-2 w-3/4 rounded'>
          🎉 Account created successfully!
        </div>
      )}
      {failure && (
        <div className='text-center bg-red-500 mt-20 text-white m-auto p-2 w-3/4 rounded'>
          ❌ {failure}
        </div>
      )}

      <form onSubmit={handleSubmit(mysubmit)} className='w-3/4 mx-auto mt-32'>
        <h1 className='text-3xl font-bold mb-6'>Sign Up</h1>

        {/* Name */}
        <div className="flex flex-col mt-3">
          <label htmlFor="user">User Name</label>
          <input id='user' {...register("name")} type="text" className={inputClass} placeholder='Username...' />
          {formState.touchedFields.name && formState.errors.name && (
            <p className={errorClass}>{formState.errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col mt-3">
          <label htmlFor="email">E-mail</label>
          <input id='email' {...register("email")} type="email" className={inputClass} placeholder='example@gmail.com' />
          {formState.touchedFields.email && formState.errors.email && (
            <p className={errorClass}>{formState.errors.email.message}</p>
          )}
        </div>

        {/* Phone ← الحقل الجديد بدل dateOfBirth */}
        <div className="flex flex-col mt-3">
          <label htmlFor="phone">Phone</label>
          <input id='phone' {...register("phone")} type="tel" className={inputClass} placeholder='01xxxxxxxxx' />
          {formState.touchedFields.phone && formState.errors.phone && (
            <p className={errorClass}>{formState.errors.phone.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col mt-3">
          <label htmlFor="password">Password</label>
          <input id='password' {...register("password")} type="password" className={inputClass} placeholder='******' />
          {formState.touchedFields.password && formState.errors.password && (
            <p className={errorClass}>{formState.errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col mt-3">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input id='confirm-password' {...register("rePassword")} type="password" className={inputClass} placeholder='******' />
          {formState.touchedFields.rePassword && formState.errors.rePassword && (
            <p className={errorClass}>{formState.errors.rePassword.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='mt-6 border-2 border-blue-500 px-8 py-3 rounded-2xl text-blue-500 hover:bg-blue-500 hover:text-white duration-300 cursor-pointer'
        >
          Submit
        </button>
      </form>
    </div>
  )
}