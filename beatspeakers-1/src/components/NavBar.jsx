import { Link } from 'react-router-dom';
import logo from '../assets/BeatspeakersLogoWhite.png'
import logo1 from '../assets/logoGreyBorder2.png'
import sideimg from '../assets/sideimg2.png'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

export const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="flex">
            
        <div className="fixed w-full h-[100px] flex justify-between items-center pl-6 lg:pl-8 xl:pl-10 2xl:pl-12 pr-6 bg-[#121212] text-gray-300 text-lg">
            <div className="pt-24 sm:pt-28 md:pt-28 lg:pt-40 xl:pt-40 2xl:pt-48 z-10">
                <img className="w-60 lg:w-80 xl:w-80 2xl:w-96"src={logo1} alt="logo" />
            </div>
            <div>
            <ul className="hidden md:flex items-center gap-5">
                    <li>
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/workshops" >
                            Workshops
                        </Link>
                    </li>
                    <li>
                        <Link to="/artists" >
                            Artists
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex fixed flex-col bottom-0 right-0 z-10">
                <img src={sideimg} alt="logo" />
            </div>
            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                    {!nav ? <FaBars/> : <FaTimes/> }
            </div>
            {/* Mobile Menu */}
            <div className={!nav ? "hidden" : "fixed top-4 left-0 w-full h-full  flex flex-col justify-center items-center bg-[#121212]"}>
            
            <ul >
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to="/" >
                            Home
                        </Link>
                    </li>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to="/about" >
                            About
                        </Link>
                    </li>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to="/workshops"  >
                            Workshops
                        </Link>
                    </li>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to="/artists"  >
                            Artists
                        </Link>
                    </li>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to="/gallery"  >
                            Gallery
                        </Link>
                    </li>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to="/contact"  >
                            Contact
                        </Link>
                    </li>
                </ul>
                
            </div>
            
            
        </div>
        
        
        </div>
    )
}