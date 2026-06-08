import React from 'react'
import Cards from './Cards'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Loader from './Loader'
import { useNavigate, useParams } from 'react-router-dom'

export default function Carddetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    function getCardDetail() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
    }
    const { data ,isLoading} = useQuery({
        queryKey : ['carddetail',id],
        queryFn: getCardDetail,
    refetchOnMount: false, // ✅ مش عايزينها تعيد جلب البيانات لما الكومبوننت يترندر
    refetchOnWindowFocus: false, // ✅ مش عايزينها تعيد جلب البيانات لما المستخدم يرجع للصفحة
    })
    console.log(data?.data?.data)
    if (isLoading) {
        return <Loader />
    }
    const cat = data?.data?.data
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center bg-[url('https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png')] bg-cover bg-center bg-no-repeat">
            <div className="mt-20 relative min-h-screen w-full overflow-hidden md:flex">

            {/* ===== الجانب الأيسر: الصورة مع gradient ===== */}
            <div className="relative w-full h-[50vh] md:w-1/2 h-[100vh]">
                <img
                    src={cat?.image}
                    alt={cat?.name}
                    className="absolute inset-0 w-full h-full object-cover  "
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black md:hidden" />
                {/* gradient من اليمين للشاشة */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black hidden md:block" />
                
            </div>

            {/* ===== الجانب الأيمن: الداتا ===== */}
            <div className="relative flex flex-col justify-center px-6 py-10 md:px-12 md:w-1/2 z-10">

                {/* زرار الرجوع */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-[#A6FF5D] hover:text-black transition"
                >
                    ← Back
                </button>

                {/* slug */}
                <p className="text-[#A6FF5D] text-sm font-medium uppercase tracking-widest mb-3">
                    {cat?.slug}
                </p>

                {/* الاسم */}
                <h1 className="text-white text-5xl font-bold leading-tight mb-4">
                    {cat?.name}
                </h1>

                {/* خط فاصل */}
                <div className="w-16 h-1 bg-[#A6FF5D] rounded-full mb-6" />

                {/* التاريخ */}
                <p className="text-white/50 text-sm mb-10">
                    📅 {new Date(cat?.createdAt).toLocaleDateString('ar-EG', {
                        year: 'numeric', month: 'long', day: 'numeric'
                    })}
                </p>

                {/* الأزرار */}
                <div className="flex gap-4">
                    <button className="bg-[#A6FF5D] text-black px-8 py-3 rounded-xl font-semibold text-sm hover:bg-white transition">
                        🛍️ Shop Now
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-white/20 transition border border-white/20">
                        ♡ Save
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
