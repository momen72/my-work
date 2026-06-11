import axios from 'axios'
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Loader from './Loader'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Carddetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    function getCardDetail() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`, {
            headers: { token: localStorage.getItem('token') }
        })
    }

    function addproduct() {
        return axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",
            { productId: id },
            { headers: { token: localStorage.getItem('token') } }
        )
    }

    const { mutate } = useMutation({
        mutationFn: addproduct,
        onSuccess: () => {
            queryClient.invalidateQueries(['wishlist'])
            toast.success("Product added to wishlist successfully", { autoClose: 2000 })
            navigate('/wishlist')
        },
    })

    const { data, isLoading } = useQuery({
        queryKey: ['carddetail', id],
        queryFn: getCardDetail,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })

    if (isLoading) return <Loader />

    const cat = data?.data?.data

    return (
        <div className='bg-black text-white flex flex-col items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-10'>
            <div className="mt-20 relative min-h-screen w-full overflow-hidden md:flex">

                {/* ===== الصورة ===== */}
                <div className="relative w-full h-[50vh] md:w-1/2 md:h-screen">
                    <img
                        src={cat?.imageCover}
                        alt={cat?.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black md:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black hidden md:block" />
                </div>

                {/* ===== التفاصيل ===== */}
                <div className="relative flex flex-col justify-center px-6 py-16 md:px-12 md:w-1/2 z-10 overflow-y-auto">
                    

                    {/* البراند والكاتيجوري */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#A6FF5D] text-black text-xs font-semibold px-3 py-1 rounded-full">
                            {cat?.brand?.name}
                        </span>
                        <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
                            {cat?.category?.name}
                        </span>
                    </div>

                    {/* الاسم */}
                    <h1 className="text-white text-4xl font-bold leading-tight mb-3">
                        {cat?.title}
                    </h1>

                    {/* الوصف */}
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                        {cat?.description}
                    </p>

                    {/* خط فاصل */}
                    <div className="w-16 h-1 bg-[#A6FF5D] rounded-full mb-6" />

                    {/* السعر والريتينج */}
                    <div className="flex items-center gap-6 mb-6">
                        <div>
                            <p className="text-white/40 text-xs mb-1">Price</p>
                            <p className="text-[#A6FF5D] text-3xl font-bold">${cat?.price}</p>
                        </div>
                        <div>
                            <p className="text-white/40 text-xs mb-1">Rating</p>
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400 text-lg">★</span>
                                <span className="text-white font-semibold">{cat?.ratingsAverage}</span>
                                <span className="text-white/40 text-sm">({cat?.ratingsQuantity} reviews)</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-white/40 text-xs mb-1">In Stock</p>
                            <p className="text-white font-semibold">{cat?.quantity} pcs</p>
                        </div>
                    </div>

                    {/* Sold */}
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-6 flex items-center gap-2">
                        <span className="text-[#A6FF5D]">🔥</span>
                        <span className="text-white/60 text-sm">{cat?.sold} units sold</span>
                    </div>

                    {/* الأزرار */}
                    <div className="flex gap-4">
                        <button onClick={() => navigate(-1)} className="bg-[#A6FF5D] text-black px-8 py-3 rounded-xl font-semibold text-sm hover:bg-white transition">
                            🛍️ Shop Now
                        </button>
                        <button
                            onClick={() => mutate()}
                            className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-white/20 transition border border-white/20"
                        >
                            ♡ Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}