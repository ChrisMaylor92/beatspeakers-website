
import { HashLink } from 'react-router-hash-link';
import { useRef } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { About } from './About';
import { Carousel } from './Carousel';
export const Welcome = () => {
    
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            
            <div className='pt-36 w-[1000px]'>
                <div className='flex flex-row'>
                    <div className='h-[300px]'>
                        <p className="text-3xl text-gray-300 text-left font-bold">Music Education Agency</p>
                        <p className="text-8xl text-[#43ad2e] text-left font-bold">Beatbox,</p>
                        <p className="text-7xl text-[#e87939] text-left font-bold">Rap & DJ</p>
                        <p className="text-6xl text-gray-300 text-left font-bold">Workshops</p>
                    </div>
                    <div className="flex flex-col pl-20  h-[300px] text-gray-300 text-lg">
                        <div className="text-left w-full h-1/2 ">
                            <p>Our mission is to inspire young people to pursue a career in music by providing high quality workshops in art forms that are accessible and relevant within today’s musical landscape. Beatspeakers provide Schools, Colleges and Youth Programmes with the highest quality facilitators in Beatbox, Rap and DJing nationwide.  </p>
                        </div>  
                        <div className="flex flex-row w-full gap-4 pt-12 justify-start">
                                
                                 <Link to="/workshops" >
                                    <button className="text-white text-lg border-2 p-3 my-2 flex items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
                                        View Workshop Offers
                                    </button>
                                </Link>
                                <HashLink to="/#contact" smooth={true} duration={500}>
                                 <button className="text-white text-lg border-2 p-3 my-2 flex items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
                                     Get in touch
                                 </button>
                             </HashLink>
                                 
                        </div>
                    </div>
                </div>
                
               
            </div>
            
            <div className='p-20'>
                <Carousel />
            </div>
            
            <div id="about" className="">
        
        </div>
        </div>
        // <div >
        //     {/* Full screen Horizontal layout*/}
        //     <div  className="hidden xl:grid grid-cols-1 grid-rows-4  w-full h-screen " >
        //         <div className="flex ">
        //             {/* <p className="text-gray-300 text-8xl">TESTING</p> */}
        //         </div>
                
        //         <div className="grid grid-cols-3 grid-rows-1 items-start w-screen">
        //             <div className="ml-12 ">
        //                 <p className="text-3xl text-gray-300 text-left font-bold">Music Education Agency</p>
        //                 <p className="text-8xl text-[#43ad2e] text-left font-bold">Beatbox,</p>
        //                 <p className="text-7xl text-[#e87939] text-left font-bold">Rap & DJ</p>
        //                 <p className="text-6xl text-gray-300 text-left font-bold">Workshops</p>
        //                 <div className="pt-3 flex gap-5">
                           
        //                     <HashLink to="/#about" smooth={true} duration={500}>
        //                         <button className="text-white text-lg border-2 p-3 my-2 flex items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
        //                             Find out more
        //                         </button>
        //                     </HashLink>
        //                     <HashLink to="/#contact" smooth={true} duration={500}>
        //                         <button className="text-white text-lg border-2 p-3 my-2 flex items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
        //                             Get in touch
        //                         </button>
        //                     </HashLink>
                            
                            
        //                 </div>
        //             </div>
                    
        //             <div className="items-center
        //             ">
        //                         <ReactPlayer
        //                             url={myVideo}
        //                             loop={true}
        //                             volume={1}
        //                             playing={true}
        //                             muted={true}
        //                             width="100%"
        //                             height="100%"
        //                             controls
                                
        //                         /> 
        //             </div>
                    
                   
        //         </div>
                
                
               
            
        //     </div>
        //     {/* Medium View */}
        //     <div className="hidden md:grid xl:hidden ">
                    
        //             <div className="grid grid-cols-2 ml-12 mt-48 ">
        //                 <div className="">
        //                     <p className="text-3xl text-gray-300 text-left font-bold">Music Education Agency</p>
        //                     <p className="text-8xl text-[#43ad2e] text-left font-bold">Beatbox,</p>
        //                     <p className="text-7xl text-[#e87939] text-left font-bold">Rap & DJ</p>
        //                     <p className="text-6xl text-gray-300 text-left font-bold">Workshops</p>
        //                     <div className="pt-3 flex gap-5">
        //                     <HashLink to="/#about" smooth={true} duration={500}>
        //                         <button className="text-white text-lg border-2 p-3 my-2 flex items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
        //                             Find out more
        //                         </button>
        //                     </HashLink>
        //                     <HashLink to="/#contact" smooth={true} duration={500}>
        //                         <button className="text-white text-lg border-2 p-3 my-2 flex items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
        //                             Get in touch
        //                         </button>
        //                     </HashLink>
                           
                                
                            
        //                 </div>
        //                 </div>
                        
        //             </div>               
                    
                    
        //             <div className="flex items-center justify-center">
        //                         <ReactPlayer
        //                             url={myVideo}
        //                             loop={true}
        //                             volume={1}
        //                             playing={true}
        //                             muted={true}
        //                             width="80%"
        //                             height="80%"
        //                             controls
                                
        //                         /> 
        //             </div>
                    
                    
        //     </div>
        //     {/* Mobile Screen Portrait Layout */}
        //     <div className="grid md:hidden ">
                    
                                    
        //             <div className="ml-8 mt-48 ">
        //                 <p className="text-2xl xl:text-3xl text-gray-300 text-left font-bold">Music Education Agency</p>
        //                 <p className="text-7xl xl:text-8xl text-[#43ad2e] text-left font-bold">Beatbox,</p>
        //                 <p className="text-6xl xl:text-7xl text-[#e87939] text-left font-bold">Rap & DJ</p>
        //                 <p className="text-5xl xl:text-6xl text-gray-300 text-left font-bold">Workshops</p>
        //                 <div className="pt-3 flex gap-5">
                           
        //                 <HashLink to="/#about" smooth={true} duration={500}>
        //                         <button className="text-white text-lg border-2 p-3 my-2 flex items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
        //                             Find out more
        //                         </button>
        //                     </HashLink>
        //                     <HashLink to="/#contact" smooth={true} duration={500}>
        //                         <button className="text-white text-lg border-2 p-3 my-2 flex items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
        //                             Get in touch
        //                         </button>
        //                     </HashLink>
                            
        //                 </div>
        //             </div>
                    
        //             <div className="flex items-center justify-center">
        //                         <ReactPlayer
        //                             url={myVideo}
        //                             loop={true}
        //                             volume={1}
        //                             playing={true}
        //                             muted={true}
        //                             width="90%"
        //                             height="90%"
        //                             controls
                                
        //                         /> 
        //             </div>
                    
                   
        //     </div>
       
            
        // </div>
        
    )
}