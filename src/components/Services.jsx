export default function Services() {
    const services = [
        {
            name: 'Web design',
            icon: '../assets/New folder/web-icon.png',
            description: 'Web development is the process of building, programming...',
            link: '#',
        },
        {
            name: 'UI/ UX design',
            icon: '../assets/New folder/ui-icon.png',
            description: 'Web development is the process of building, programming...',
            link: '#',
        },
        {
            name: 'Graphics design',
            icon: '../assets/New folder/graphics-icon.png',
            description: 'Web development is the process of building, programming...',
            link: '#',
        }
    ];
    return (
        <div id="services" className='pt-28 bg-black text-white flex flex-col items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-10 '>
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a Graphic designer from Damanhour , Behaira with 3 years of experience in multiple companies and I am looking forward to being a frontend developer</p>

            <div className="flex gap-7 my-10 mx-30">
                {services.map((service) => (
                    <div key={service.name} className="bg-black border border-gray-300 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 hover:-translate-x-1 duration-500 hover:bg-darkHover hover:shadow-emerald-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-white">{service.name}</h3>
                        <p className="text-sm  leading-5 text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}