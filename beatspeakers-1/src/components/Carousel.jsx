import ultragrade from '../assets/ultragrade.mp4'
import amenBreak from '../assets/amenBreak.mp4'
import callResponse from '../assets/CallandResponse.mp4'
import launch from '../assets/Launch.mp4'
import myVideo from '../assets/Renegrade.mp4'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { useState } from "react";
import ReactPlayer from 'react-player';
import "./Carousel.css";
export const Carousel = () => {
    const data = [
        {
            "description": "Renegrade Beatbox Video",
            "video": myVideo
        },
        {
            "description": "Renegrade and Bass Ventura performing at UK Beatbox Chammpionships",
            "video": ultragrade
        },
        {
            "description": "Renegrade facilitating a super quick Human Orchestra",
            "video": launch
        },
        
        {
            "description": "How to Beatbox the Amen Break",
            "video": amenBreak
        }
        
    ]
    const [slide, setSlide] = useState(0)
    const [unmuted, setUnmuted] = useState(false)
    const nextSlide = () => {
        setSlide(slide === data.length -1 ? 0 : slide + 1)
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }
    
    return <div className="carousel">
                {/* <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/> */}
                {data.map((item, idx) => {
                    return <span key={idx} className={slide === idx ? "flex justify-center items-center" : "hidden"}>
                            
                            
                                <ReactPlayer
                                    url={item.video}
                                    loop={true}
                                    volume={1}
                                    muted={unmuted === false ? true : false}
                                    playing={slide === idx ? true : false}
                                    width="1000px"
                                    height="100%"
                                    controls
                                    className="justify-center items-center"
                                /> 
                            
                        </span>
                })}
                
                {/* <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/> */}
                <span className="indicators">
                    {data.map((_, idx) => {
                        return <button key={idx} onClick={() => {setSlide(idx); setUnmuted(true)} } className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                    })}
                </span>
    </div>
}