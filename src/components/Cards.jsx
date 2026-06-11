import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards({ cat }) {
    const STATIC = 'https://ecommerce.routemisr.com'

    // console.log(cat)
    return (
        <div className="p-4 bg-black-100 flex flex-col border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow-none hover:shadow hover:shadow-[#A6FF5D] max-w-100">
            <img 
                className="rounded-md max-h-40 w-full object-cover" 
                src={cat?.imageCover || STATIC} 
                alt={cat?.name} 
                onError={(e) => e.target.src = STATIC}
            />
            <p className="text-[#A6FF5D] text-xl font-semibold ml-2 mt-4">
                {cat?.category?.name}
            </p>
            
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
                {cat?.slug}
            </p>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
                {cat?.createdAt && new Date(cat.createdAt).toLocaleDateString('ar-EG', {
                    year: 'numeric', month: 'long', day: 'numeric'
                })}
            </p>
            <Link 
                to={`/Carddetail/${cat?._id}`}
                type="button" 
                className="bg-[#A6FF5D] mt-auto hover:bg-white transition cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded-md text-black text-sm"
            >
                Learn More
            </Link>
           
        </div>
    );
}