import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player';
import myVideo from '../assets/video.mp4'
export const Home = () => {
    const [timePassedOne, setTimePassedOne] = useState(false)
    const [timePassedTwo, setTimePassedTwo] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setTimePassedOne(true)
        }, 4700)
        setTimeout(() => {
            setTimePassedTwo(true)
        }, 6000)
    }, [])

    return(
    <div className="grid grid-cols-1 xl:grid-cols-3 w-screen h-screen" >
        <div className="grid grid-rows-2  xl:grid-rows-4  ">
           <div className="hidden xl:flex"></div>
                <div className="row-span-2 xl:row-span-2 pt-48 xl:pt-2 items-left pl-10 lg:pl-12 xl:pl-14 2xl:pl-16 text-gray-300">
                    <div className="  pl-1 flex">
                        <TypeAnimation 
                            sequence={[
                                1000,
                                'Music Education Agency',
                                1000
                                
                                ]}
                            wrapper="span"
                            speed={70}
                            className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-2xl 2xl:text-3xl text-left font-bold  pb-2 justify-items-start text-[#ffffff]"
                            repeat={0}
                            cursor={false}
                        />
                    </div>
                    <div className="flex">
                        <TypeAnimation 
                            sequence={[
                                2100,
                                'Beatbox,',
                                1000
                                
                                ]}
                            wrapper="span"
                            speed={60}
                            className="text-7xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-7xl 2xl:text-8xl text-left font-bold  pb-2 justify-items-start text-[#43ad2e]"
                            repeat={0}
                            cursor={false}
                        />
                    </div>
                    <div className="flex items-center gap-3 ">
                                <TypeAnimation 
                                    sequence={[
                                        2900,
                                        'Rap',
                                        1000
                                        
                                        ]}
                                    wrapper="span"
                                    speed={60}
                                    className="text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl text-left font-bold pb-2 justify-items-start text-[#e87939]"
                                    repeat={0}
                                    cursor={false}
                                />
                                <TypeAnimation 
                                    sequence={[
                                        3300,
                                        '&',
                                        1000
                                        
                                        ]}
                                    wrapper="span"
                                    speed={60}
                                    className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-4xl 2xl:text-5xl text-left font-bold pb-2 pt-3 justify-items-start text-[#ffffff]"
                                    repeat={0}
                                    cursor={false}
                                />
                                <TypeAnimation 
                                    sequence={[
                                        3400,
                                        'DJ',
                                        1000
                                        
                                        ]}
                                    wrapper="span"
                                    speed={60}
                                    className="text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl text-left font-bold pb-2 justify-items-start text-[#e87939]"
                                    repeat={0}
                                    cursor={false}
                                />
                        </div>
                        <div className="flex">
                            <TypeAnimation 
                                sequence={[
                                    3600,
                                    'Workshops',
                                    1000
                                    
                                    ]}
                                wrapper="span"
                                speed={60}
                                className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-5xl 2xl:text-6xl text-left font-bold pb-2 justify-items-start text-[#ffffff]"
                                repeat={0}
                                cursor={false}
                            />
                        </div>
                
                
                        
                        {timePassedOne && <p className="text-white text-left pt-4 ">FIND OUT MORE _button</p>}
                        {/* <div className="flex">
                        <TypeAnimation 
                            sequence={[
                                5400,
                                'Or',
                                1000
                                
                                ]}
                            wrapper="span"
                            speed={60}
                            className="text-2xl sm:text-3xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl text-left font-bold justify-items-start text-[#ffffff]"
                            repeat={0}
                            cursor={false}
                        />
                        </div>  */}
                        {timePassedTwo && <p className="text-white text-left  ">GET IN TOUCH _button</p>}
                        </div>
            
                        <div className="flex items-center justify-center py-10 ">
                            <ReactPlayer
                                url={myVideo}
                                loop={true}
                                volume={1}
                                playing={true}
                                muted={true}
                                width="80%"
                                height="80%"
                                controls
                                className="xl:hidden"
                            /> 
                        </div>
                        
            
                </div>
                <div className="hidden xl:flex items-center justify-center ">
                    <div className="">
                        <ReactPlayer
                    
                            url={myVideo}
                            loop={true}
                            volume={1}
                            playing={true}
                            muted={true}
                            width="512px"
                            height="512px"
                            controls
                            className=""
                        /> 
                    </div>
                </div>
                <div>
                    <div className="pl-20 flex">
                                <TypeAnimation 
                                    sequence={[
                                        3600,
                                        'Testimonials?',
                                        1000
                                        
                                        ]}
                                    wrapper="span"
                                    speed={60}
                                    className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-2xl 2xl:text-3xl text-left font-bold pt-72 justify-items-start text-[#ffffff]"
                                    repeat={0}
                                    cursor={false}
                                />
                    </div>
                    <div className="pl-20 flex">
                                <TypeAnimation 
                                    sequence={[
                                        3600,
                                        'More random words about things that are',
                                        1000
                                        
                                        ]}
                                    wrapper="span"
                                    speed={60}
                                    className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-2xl 2xl:text-3xl text-left font-bold justify-items-start text-[#ffffff]"
                                    repeat={0}
                                    cursor={false}
                                />
                    </div>
                </div>
                
            </div>
    ) 
}