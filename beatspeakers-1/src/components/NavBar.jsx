import { Link } from 'react-router-dom';
import logo from '../assets/BeatspeakersLogoWhite.png'
import logo1 from '../assets/BeatspeakersLogoGreen.png'
import sideimg from '../assets/sideimg2.png'
export const NavBar = () => {
    return (
        <div>
            
        <div className="fixed w-full h-[100px] flex justify-between items-center px-6 bg-[#232323] text-gray-300 text-lg">
            <div className="pt-28 pl-2">
                <img src={logo} alt="logo" style={{width: '200px'}}/>
            </div>
            <div>
            <ul className="hidden md:flex items-center gap-6">
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
            <div className="flex fixed flex-col bottom-0 right-0">
                <img src={sideimg} alt="logo" />
            </div>
        </div>
        
        
        </div>
    )
}