// import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import Cards from './Cards'
import { useQuery } from '@tanstack/react-query'

export default function Categories() {
    // const [categories, setCategories] = useState(null)
    // const [loader, setLoader] = useState(false)

    const { data, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: function() {
            return axios.get('https://ecommerce.routemisr.com/api/v1/categories', {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
        },
        refetchOnMount: false, // ✅ مش عايزينها تعيد جلب البيانات لما الكومبوننت يترندر
            refetchOnWindowFocus: false, // ✅ مش عايزينها تعيد جلب البيانات لما المستخدم يرجع للصفحة
            gcTime: 5 * 60 * 1000, // ✅ وقت تخزين البيانات في الذاكرة (5 دقائق)
                staleTime: 5 * 60 * 1000, // ✅ وقت اعتبار البيانات "طازجة" (5 دقائق)
                retry: 2, // ✅ عدد مرات إعادة المحاولة في حالة الفشل
                enabled: !!localStorage.getItem('token') // ✅ تشغيل الاستعلام فقط إذا كان هناك توكن في localStorage كدة هو بيشيك اذا كان اليوزر مسجل دخول ولا لأ، لو مفيش توكن مش هيحاول يجيب البيانات من السيرفر
    })

    // useEffect(() => {
    //     // ✅ الفانكشن جوه الـ useEffect مباشرة
    //     async function getCategories() {
    //         setLoader(true)
    //         try {
    //             const res = await axios.get('https://ecommerce.routemisr.com/api/v1/categories', {
    //                 headers: {
    //                     token: localStorage.getItem('token')
    //                 }
    //             })
    //             setCategories(res.data.data)
    //         } catch (err) {
    //             console.log(err)
    //         } finally {
    //             setLoader(false)
    //         }
    //     }

    //     getCategories()
    // }, []) // ✅ [] يعني هيشتغل مرة واحدة بس

    if (isLoading) {
        return <Loader />
    }
const categories = data.data.data
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center bg-[url('https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png')] bg-cover bg-center bg-no-repeat">
                <div className="pt-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categories?.map(cat => (
            <Cards key={cat._id} cat={cat} />
        ))}
    </div>
        </div>
    )
}