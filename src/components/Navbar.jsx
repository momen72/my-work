import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Untitled-1 copy.svg"
import { Counter } from '../context/CounterProvider';
import { useNavigate } from 'react-router-dom';

const Radio = () => {
    
    const [mobileOpen, setMobileOpen] = useState(false);
    const { usertoken , setusertoken} = useContext(Counter);
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        setusertoken(null);
        navigate('/home');
    }

    return (
        <nav className="flex flex-col items-center w-full fixed bg-transparent z-50 bg-black/30 backdrop-blur-md">
            <div className="flex items-center justify-between h-20 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full px-4">
                
                {/* Logo */}
                <img src={logo} alt="logo" className="w-20" />

                {/* Desktop Menu */}
                {usertoken && <>
                <div className=" md:flex items-center gap-8 text-sm ml-15">
                    <NavLink
                        to="/home"
                        className={({ isActive }) => isActive ? "text-white font-bold" : "text-white/70 hover:text-white/80 transition-colors"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => isActive ? "text-white font-bold" : "text-white/70 hover:text-white/80 transition-colors"}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/categories"
                        className={({ isActive }) => isActive ? "text-white font-bold" : "text-white/70 hover:text-white/80 transition-colors"}
                    >
                        Categories
                    </NavLink>
                    <NavLink
                        to="/wishlist"
                        className={({ isActive }) => isActive ? "text-white font-bold" : "text-white/70 hover:text-white/80 transition-colors"}
                    >
                        Wishlist
                    </NavLink>
                </div>
                </>}

                {/* Desktop Right Side */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Download CV Button */}
                    <div className='p-[0.5px] rounded-full bg-linear-to-r from-white to-[#999999]/0'>
                        <a href="/public/front.pdf" download>
                            <button className="flex items-center gap-2 bg-[#A6FF5D] text-gray-800 font-medium px-4 py-2.5 rounded-full text-sm transition cursor-pointer group">
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z"/>
                                </svg>
                                <div className="relative overflow-hidden">
                                    <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                                        Download CV
                                    </span>
                                    <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                                        Download CV
                                    </span>
                                </div>
                            </button>
                        </a>
                    </div>

                    {/* Auth Section — منفصلة بفاصل بصري */}
                    {usertoken ? (
                        <div className="flex items-center gap-3 border-l border-white/20 pl-4">
                            {/* User Avatar */}
                            <div className="w-8 h-8 rounded-full bg-white/15 border border-white/25 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                                    fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-1.5 text-white/60 hover:text-red-400 text-sm transition-colors duration-200 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="transition-transform duration-200 group-hover:translate-x-0.5">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                    <polyline points="16 17 21 12 16 7"/>
                                    <line x1="21" y1="12" x2="9" y2="12"/>
                                </svg>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4 border-l border-white/20 pl-4">
                            <NavLink
                                to="/login"
                                className={({ isActive }) => isActive ? "text-white font-bold text-sm" : "text-white/70 hover:text-white/80 text-sm transition-colors"}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className="bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm px-4 py-2 rounded-full transition-colors duration-200"
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <button
                    id="open-menu"
                    onClick={() => setMobileOpen(true)}
                    className="md:hidden bg-gray-900 hover:bg-gray-800 text-gray-50 p-2 rounded-md aspect-square font-medium transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/>
                    </svg>
                </button>

                {/* Mobile Drawer */}
                <div
                    id="menu"
                    className={`${mobileOpen ? 'w-full opacity-100' : 'w-0 opacity-0'} md:hidden fixed top-0 left-0 z-10 transition-all duration-300 overflow-hidden h-screen bg-black/60 backdrop-blur-lg flex flex-col justify-center items-center gap-8 text-sm`}
                >
                    {/* Close Button */}
                    <button
                        id="close-menu"
                        onClick={() => setMobileOpen(false)}
                        className="absolute top-6 right-6 bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                        </svg>
                    </button>

                    {/* Nav Links */}
                    {usertoken && (
                        <>
                     <NavLink
                        to="/home"
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) => isActive ? "text-white font-bold text-lg" : "text-white/70 hover:text-white/90 text-lg transition-colors"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) => isActive ? "text-white font-bold text-lg" : "text-white/70 hover:text-white/90 text-lg transition-colors"}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/categories"
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) => isActive ? "text-white font-bold text-lg" : "text-white/70 hover:text-white/90 text-lg transition-colors"}
                    >
                        Categories
                    </NavLink>
                    </>)}
                   

                    {/* Download CV */}
                    <a href="/public/front.pdf" download onClick={() => setMobileOpen(false)}>
                        <button className="flex items-center gap-2 bg-[#A6FF5D] text-gray-800 font-medium px-5 py-2.5 rounded-full text-sm transition cursor-pointer">
                            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z"/>
                            </svg>
                            Download CV
                        </button>
                    </a>

                    {/* Divider */}
                    <div className="w-16 h-px bg-white/20"></div>

                    {/* Auth — منفصلة في الأسفل */}
                    {usertoken ? (
                        <button
                            onClick={() => { setMobileOpen(false); handleLogout(); }}
                            className="flex items-center gap-2 text-white/50 hover:text-red-400 text-base transition-colors duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                <polyline points="16 17 21 12 16 7"/>
                                <line x1="21" y1="12" x2="9" y2="12"/>
                            </svg>
                            Logout
                        </button>
                    ) : (
                        <div className="flex flex-col items-center gap-4">
                            <NavLink
                                to="/login"
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) => isActive ? "text-white font-bold text-lg" : "text-white/70 hover:text-white/90 text-lg transition-colors"}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/signup"
                                onClick={() => setMobileOpen(false)}
                                className="bg-white/10 hover:bg-white/20 border border-white/25 text-white text-base px-6 py-2.5 rounded-full transition-colors duration-200"
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Radio;