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
    <div className="grid grid-cols-3 w-screen h-screen" >
        <div className="w-screen h-screen flex flex-col items-left  text-gray-300">
          <div className="pt-48 md:pt-60 pl-8 flex">
            <TypeAnimation 
                sequence={[
                    1000,
                    'Music Education Agency',
                    1000
                    
                    ]}
                wrapper="span"
                speed={70}
                className="text-2xl md:text-4xl text-left font-bold  pb-2 justify-items-start text-[#ffffff]"
                repeat={0}
                cursor={false}
            />
          </div>
          <div className="pl-8 flex">
            <TypeAnimation 
                sequence={[
                    2100,
                    'Beatbox,',
                    1000
                    
                    ]}
                wrapper="span"
                speed={60}
                className="text-6xl md:text-8xl text-left font-bold  pb-2 justify-items-start text-[#43ad2e]"
                repeat={0}
                cursor={false}
            />
          </div>
          <div className="flex items-center gap-3 pl-8">
                    <TypeAnimation 
                        sequence={[
                            2900,
                            'Rap',
                            1000
                            
                            ]}
                        wrapper="span"
                        speed={60}
                        className="text-5xl md:text-7xl text-left font-bold pb-2 justify-items-start text-[#e87939]"
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
                        className="text-3xl md:text-5xl text-left font-bold pb-2 pt-3 justify-items-start text-[#ffffff]"
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
                        className="text-5xl md:text-7xl text-left font-bold pb-2 justify-items-start text-[#e87939]"
                        repeat={0}
                        cursor={false}
                    />
            </div>
            <div className="pl-8 flex">
                <TypeAnimation 
                    sequence={[
                        3600,
                        'Workshops',
                        1000
                        
                        ]}
                    wrapper="span"
                    speed={60}
                    className="text-4xl md:text-6xl text-left font-bold pb-2 justify-items-start text-[#ffffff]"
                    repeat={0}
                    cursor={false}
                />
            </div>
        {timePassedOne && <p className="text-white text-left pt-4 pl-8">FIND OUT MORE _button</p>}
        <div className="pl-8 flex">
                <TypeAnimation 
                    sequence={[
                        5400,
                        'Or',
                        1000
                        
                        ]}
                    wrapper="span"
                    speed={60}
                    className="text-1xl md:text-3xl text-left font-bold justify-items-start text-[#ffffff]"
                    repeat={0}
                    cursor={false}
                />
                </div>
                {timePassedTwo && <p className="text-white text-left  pl-8">GET IN TOUCH _button</p>}
        
            </div>
            <div className="flex items-center justify-center">
                <ReactPlayer
                    url={myVideo}
                    loop={true}
                    width="500px"
                    height="500px"
                    controls
                />
            </div>
            <div>

            </div>
        </div>
    ) 
}