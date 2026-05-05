import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

const loginSchema = zod.object({
  email: zod.string().email("Email is not in correct format"),
  password: zod.string().nonempty("Password is required").min(6, "Password must be at least 6 characters"),
})

export default function Login() {
  const { handleSubmit, register, formState } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
  })

  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(null)
  const [loading, setLoading] = useState(false)

  function mysubmit(value) {
    setLoading(true)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', value)
      .then(function (res) {
        console.log(res.data)
        setSuccess(true)
        setLoading(false)
        setTimeout(() => setSuccess(false), 3000)
      })
      .catch(function (err) {
        console.log(err.response.data.message)
        setFailure(err.response.data.message)
        setLoading(false)
        setTimeout(() => setFailure(null), 3000)
      })
  }

  const inputClass ='p-2.5 w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300'
  const errorClass = 'text-red-400 text-sm mt-1'

  return (
    <div
      className="min-h-screen bg-black text-white flex items-center justify-center bg-[url('https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-4">

        {/* Alerts */}
        {success && (
          <div className="mb-4 text-center bg-green-500/80 backdrop-blur text-white p-3 rounded-lg">
            ✅ Logged in successfully!
          </div>
        )}
        {failure && (
          <div className="mb-4 text-center bg-red-500/80 backdrop-blur text-white p-3 rounded-lg">
            ❌ {failure}
          </div>
        )}

        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">

          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/40 mb-4">
              <svg className="w-8 h-8 text-[]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
            <p className="text-white/50 mt-1 text-sm">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(mysubmit)} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                className={inputClass}
                placeholder="example@gmail.com"
              />
              {formState.touchedFields.email && formState.errors.email && (
                <p className={errorClass}>{formState.errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5">
                Password
              </label>
              <input
                id="password"
                {...register("password")}
                type="password"
                className={inputClass}
                placeholder="••••••••"
              />
              {formState.touchedFields.password && formState.errors.password && (
                <p className={errorClass}>{formState.errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 px-6 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-white/40 text-sm mt-6">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">
              Sign Up
            </a>
          </p>

        </div>
      </div>
    </div>
  )
}