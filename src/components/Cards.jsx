export default function Cards({ cat }) {
    const STATIC = 'https://ecommerce.routemisr.com'
    console.log(cat)
    return (
        <div className="p-4 bg-black-100 border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow-none hover:shadow hover:shadow-[#A6FF5D] max-w-100">
            <img 
                className="rounded-md max-h-40 w-full object-cover" 
                src={cat?.image} 
                alt={cat?.name} 
                onError={(e) => e.target.src = STATIC}
            />
            <p className="text-[#A6FF5D] text-xl font-semibold ml-2 mt-4">
                {cat?.name}
            </p>
            
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
                {cat?.slug}
            </p>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
                {cat?.createdAt.split('T')[0]}
            </p>
            <button 
                type="button" 
                className="bg-[#A6FF5D] hover:bg-white transition cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded-md text-black text-sm"
            >
                Learn More
            </button>
        </div>
    );
}