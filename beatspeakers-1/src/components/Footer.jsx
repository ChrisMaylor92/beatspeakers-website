import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Footer = () => {
    
    return (
                <div className=" w-screen h-[200px]  bottom-0 z-10 bg-[#121212]  text-lg">
                
                <FaInstagram color="white" size="80px"/>
                   <p>Check us out on Instagram</p> 
                   <p>Useful links</p>
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
            
            
           
            )
}