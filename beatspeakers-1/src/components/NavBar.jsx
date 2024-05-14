import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo2 from '../assets/logoGreenGreyBorder.png'
import logo1 from '../assets/logoGreyBorder2.png'
import sideimg from '../assets/sideimg2.png'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

export const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="">
            
        <div className="fixed w-full h-[100px] flex justify-between items-center pr-6  bg-[#121212]  text-lg">
            <div className="group">
                        <Link to="/" className="text-gray-300 hover:text-[#43ad2e]">
                            <div className="group-hover:hidden pl-4 md:pl-8 pt-28 xl:pt-40  z-10">
                                <img className="w-60 xl:w-72 " src={logo1} alt="logo" />
                            </div>
                            <div className="hidden group-hover:flex pl-4 md:pl-8 pt-28 xl:pt-40  z-10">
                                <img className="w-60 xl:w-72" src={logo2} alt="logo" />
                            </div>
                        </Link>
                
            </div>

            <div className="z-20">
            <ul className="hidden md:flex items-center gap-5">
                    <li>
                        <Link to="/" className="text-gray-300 hover:text-[#43ad2e] z-50 pointer-events-auto">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-300 hover:text-[#43ad2e]">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/workshops" className="text-gray-300 hover:text-[#43ad2e]">
                            Workshops
                        </Link>
                    </li>
                    <li>
                        <Link to="/artists" className="text-gray-300 hover:text-[#43ad2e]">
                            Artists
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="text-gray-300 hover:text-[#43ad2e]">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-300 hover:text-[#43ad2e]">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex fixed bottom-0 right-0 z-10 pointer-events-none">
                <img src={sideimg} alt="logo" />
            </div>
            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10 text-gray-300 hover:text-[#43ad2e]" >
                    {!nav ? <FaBars/> : <FaTimes/> }
            </div>
            {/* Mobile Menu */}
            <div className={!nav ? "hidden" : "z-20 fixed top-4 left-0 w-full h-full  flex flex-col justify-center items-center bg-[#121212]"}>
            <div className="flex fixed bottom-0 right-0 z-10">
                <img src={sideimg} alt="logo" />
            </div>

            
            <ul className='z-30'>
                    <li className="py-2 text-2xl ">
                        <Link onClick={handleClick} to="/" className='text-gray-300 hover:text-[#43ad2e]' >
                            Home
                        </Link>
                    </li>
                    <li className="py-2 text-2xl ">
                        <Link onClick={handleClick} to="/about" className='text-gray-300 hover:text-[#43ad2e]' >
                            About
                        </Link>
                    </li>
                    <li className="py-2 text-2xl ">
                        <Link onClick={handleClick} to="/workshops" className='text-gray-300 hover:text-[#43ad2e]' >
                            Workshops
                        </Link>
                    </li>
                    <li className="py-2 text-2xl ">
                        <Link onClick={handleClick} to="/artists" className='text-gray-300 hover:text-[#43ad2e]' >
                            Artists
                        </Link>
                    </li>
                    <li className="py-2 text-2xl ">
                        <Link onClick={handleClick} to="/gallery" className='text-gray-300 hover:text-[#43ad2e]' >
                            Gallery
                        </Link>
                    </li>
                    <li className="py-2 text-2xl ">
                        <Link onClick={handleClick} to="/contact" className='text-gray-300 hover:text-[#43ad2e]' >
                            Contact
                        </Link>
                    </li>
                </ul>
                
            </div>
            
            
        </div>
        
        
        </div>
    )
}