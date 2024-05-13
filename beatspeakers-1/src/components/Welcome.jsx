import ReactPlayer from 'react-player';
import myVideo from '../assets/video.mp4'
export const Welcome = () => {
    return (
        <div>
            {/* Full screen Horizontal layout*/}
            <div  className="hidden xl:grid grid-cols-1 grid-rows-4  w-screen h-screen " >
                <div className="flex ">
                    {/* <p className="text-gray-300 text-8xl">TESTING</p> */}
                </div>
                
                <div className="hidden xl:grid grid-cols-3 grid-rows-1 items-start w-screen">
                    <div className="ml-12 ">
                        <p className="text-3xl text-gray-300 text-left font-bold">Music Education Agency</p>
                        <p className="text-8xl text-[#43ad2e] text-left font-bold">Beatbox,</p>
                        <p className="text-7xl text-[#e87939] text-left font-bold">Rap & DJ</p>
                        <p className="text-6xl text-gray-300 text-left font-bold">Workshops</p>
                        <button>Find out More</button>
                    </div>
                    
                    <div className="items-center">
                                <ReactPlayer
                                    url={myVideo}
                                    loop={true}
                                    volume={1}
                                    playing={true}
                                    muted={true}
                                    width="100%"
                                    height="100%"
                                    controls
                                
                                /> 
                    </div>
                    
                    <div className="mx-12 ">
                        <p className="text-gray-300 text-left font-bold text-3xl">Testimonials</p>
                        <p className="text-gray-300 text-left font-bold text-3xl">Write some nice things here, quotes from schools and students</p>
                    </div>
                </div>
                
                
                <div></div>
            
            </div>
            {/* Medium View */}
            <div className="hidden md:grid xl:hidden ">
                    
                    <div className="grid grid-cols-2 ml-12 mt-48 ">
                        <div className="">
                            <p className="text-3xl text-gray-300 text-left font-bold">Music Education Agency</p>
                            <p className="text-8xl text-[#43ad2e] text-left font-bold">Beatbox,</p>
                            <p className="text-7xl text-[#e87939] text-left font-bold">Rap & DJ</p>
                            <p className="text-6xl text-gray-300 text-left font-bold">Workshops</p>
                            <button>Find out More</button>
                        </div>
                        <div className="mr-12 ml-20">
                            <p className="text-gray-300 text-left font-bold text-3xl">Testimonials</p>
                            <p className="text-gray-300 text-left font-bold text-3xl">Write some nice things here, quotes from schools and students</p>
                        </div>
                    </div>               
                    
                    
                    <div className="flex items-center justify-center">
                                <ReactPlayer
                                    url={myVideo}
                                    loop={true}
                                    volume={1}
                                    playing={true}
                                    muted={true}
                                    width="80%"
                                    height="80%"
                                    controls
                                
                                /> 
                    </div>
                    
                    
            </div>
            {/* Mobile Screen Portrait Layout */}
            <div className="grid md:hidden ">
                    
                                    
                    <div className="ml-8 mt-48 ">
                        <p className="text-2xl xl:text-3xl text-gray-300 text-left font-bold">Music Education Agency</p>
                        <p className="text-7xl xl:text-8xl text-[#43ad2e] text-left font-bold">Beatbox,</p>
                        <p className="text-6xl xl:text-7xl text-[#e87939] text-left font-bold">Rap & DJ</p>
                        <p className="text-5xl xl:text-6xl text-gray-300 text-left font-bold">Workshops</p>
                        <button>Find out More</button>
                    </div>
                    
                    <div className="flex items-center justify-center">
                                <ReactPlayer
                                    url={myVideo}
                                    loop={true}
                                    volume={1}
                                    playing={true}
                                    muted={true}
                                    width="90%"
                                    height="90%"
                                    controls
                                
                                /> 
                    </div>
                    
                    <div className="m-8 ">
                        <p className="text-gray-300 text-left font-bold text-3xl">Testimonials</p>
                        <p className="text-gray-300 text-left font-bold text-3xl">Write some nice things here, quotes from schools and students</p>
                    </div>
            </div>
        </div>
        
    )
}