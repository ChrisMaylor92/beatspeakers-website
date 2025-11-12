import { FaInstagram } from "react-icons/fa";


export const Footer = () => {
    
    return (
                <div className="flex w-screen h-[150px] items-center justify-center bottom-0  bg-[#121212] text-white text-lg">
                <a href="https://www.instagram.com/beatspeakers" className="flex items-center text-gray-300 hover:text-[#43ad2e]  pointer-events-auto">
                     <FaInstagram color="white" size="40px"/>
                     <p className="pl-2">Check us out on Instagram</p> 
                </a>
                
                   {/* <p>Useful links</p> */}
                   {/* <ul className="hidden md:flex items-center gap-5">
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
                </ul> */}
                
                    
                    
                </div>
            
            
           
            )
}