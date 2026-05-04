import React from 'react'
import img1 from "../assets/العلا copy.png"
import img2 from "../assets/be7fa1240578071.69418b8ce331f.jpg"
import img3 from "../assets/06a187239120799.6922f0c13b8f9.jpg"
import img4 from "../assets/117236204929597.66b2058727df5 (1).jpg"
import img5 from "../assets/b2f017216471603.Y3JvcCwzOTk5LDMxMjgsMCw5.webp"
import img6 from "../assets/733fa7238371319.691371c0caa2a.webp"
import img7 from "../assets/6f9140196840469.6626b9d23286a.jpg"

const Products = () => {
    const [stopScroll, setStopScroll] = React.useState(false);
    const cardData = [
        {
            title: "Unlock Your Creative Flow",
            image: img1,
        },
        {
            title: "Design Your Digital Future",
            image: img2,
        },
        {
            title: "Build with Passion, Ship with Pride",
            image: img3,
        },
        {
            title: "Think Big, Code Smart",
            image: img4,
        },
        {
            title: "Think Big, Code Smart",
            image: img5,
        },
        {
            title: "Think Big, Code Smart",
            image: img6,
        },
        {
            title: "Think Big, Code Smart",
            image: img7,
        },
    ];

    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
                    .black {
                        background-color: black;

                    }
            `}</style>

            <div className=" overflow-hidden w-full relative  black" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
            <h1 className="text-2xl text-white md:text-[50px]/[64px] text-center  bg-clip-text my-10 leading-tight px-4">
                                My protofolio
                            </h1>
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black/80 to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 3000 + "ms" }}>
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-85 mx-4 h-85 relative group hover:scale-90 transition-all duration-300">
                                <img src={card.image} alt="card" className="w-full h-full object-cover" />
                                <div className="flex  items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    <p className="text-white text-lg font-semibold text-center">{card.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black/80 to-transparent" />
            </div>
        </>
    );
};
export default Products;
