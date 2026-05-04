import myphoto from "../assets/20241127_223155.png"
export default function Example() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="py-20 bg-black flex flex-col md:flex-row items-center justify-center gap-25 max-md:px-4">
                <div className="relative shadow-2xl shadow-emerald-200 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src={myphoto}
                        alt="" />
                </div>
                <div className="text-sm text-white max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-white">Aboute Me</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r bg-[#A6FF5D] to-[#DDD9FF]"></div>
                    <p className="mt-8">Junior Front-End Developer with a strong foundation in HTML, CSS, and JavaScript, and hands-on experience building responsive and user-friendly web interfaces. </p>
                    <p className="mt-4">Background in UI/UX and Graphic Design enables me to translate designs into clean, functional code while maintaining usability and performance.</p>
                    <p className="mt-4">Passionate about learning modern front-end technologies and best practices..</p>
                    <a href="#" className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r bg-[#A6FF5D] bg-[#73ff00] py-3 px-8 rounded-full text-black">
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="black" />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    );
};