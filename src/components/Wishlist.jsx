import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Wishlist() {

    function removeProduct(Id) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${Id}`, {
            headers: { token: localStorage.getItem('token') }
        });
    }

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: removeProduct,
        onSuccess:()=>{
            queryClient.invalidateQueries(['wishlist']);
            toast.error("Product removed from wishlist", { autoClose: 2000 });
            navigate('/wishlist');
        }
    })

    const navigate = useNavigate();
    const { data: wishlistData, isLoading } = useQuery({
        queryKey: ['wishlist'],
        queryFn: () => axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
            headers: { token: localStorage.getItem('token') }
        }),
        refetchOnMount: true,
    });

    if (isLoading) return <Loader />;

    const products = wishlistData?.data?.data || [];

    return (
        <div className="min-h-screen bg-black pt-24 px-6 pb-10"
            style={{backgroundImage: "url('https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-white text-2xl font-semibold flex items-center gap-2">
                    Wishlist
                    <span className="text-gray-400 text-lg">›</span>
                </h1>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {products.map(product => (
                    <div
                        // key={product._id}
                        // onClick={() => navigate(`/carddetail/${product._id}`)}
                        className="group relative bg-gray-100 rounded-2xl overflow-hidden cursor-pointer"
                    >
                        {/* ✅ زرار الحذف */}
                            <div className="absolute top-3 left-3 z-10">
                                <button
                                    onClick={() => mutate(product._id)}
                                    className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white text-sm transition cursor-pointer"
                                    title="Remove from wishlist"
                                >
                                    <MdDelete />
                                </button>
                            </div>

                        {/* صورة المنتج */}
                        <div className="relative">
                            <img
                                src={product.imageCover}
                                alt={product.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Quick View - يظهر عند hover */}
                            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition">
                                <button className="bg-white/80 backdrop-blur-sm text-black text-xs font-medium px-4 py-2 rounded-full">
                                    Quick View
                                </button>
                            </div>

                            {/* Cart icon */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
                                <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 text-sm">
                                    🛒
                                </div>
                            </div>

                            {/* Heart icon */}
                            <div className="absolute bottom-3 right-3">
                                <div className="w-8 h-8 bg-[#6C5CE7] rounded-full flex items-center justify-center text-white text-sm">
                                    ♥
                                </div>
                            </div>
                        </div>

                        {/* بيانات المنتج */}
                        <div className="p-3 bg-white">
                            <p className="text-gray-400 text-xs mb-1">{product.brand?.name || product.category?.name}</p>
                            <p className="text-gray-800 text-sm font-medium mb-1 truncate">{product.title}</p>
                            <div className="flex items-center gap-1 mb-1">
                                <span className="text-yellow-400 text-xs">★★★★</span>
                                <span className="text-gray-400 text-xs">4.2 (12)</span>
                            </div>
                            <p className="text-gray-800 text-sm font-semibold">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
             
            {products.length === 0 && (
                <div className="text-center text-gray-400 mt-20">
                    <p className="text-xl mb-2">Your wishlist is empty</p>
                    <button onClick={() => navigate('/categories')} className="text-[#A6FF5D] underline text-sm cursor-pointer">
                        Browse products
                    </button>
                </div>
            )}
    </div>
    )
}