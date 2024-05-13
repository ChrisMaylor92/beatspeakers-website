import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player';
import myVideo from '../assets/video.mp4'
import { Welcome } from './Welcome';
import { About } from './About';
export const Home = () => {
    

    return(
    <div className="w-screen h-screen">
        <Welcome/>
        <About/>
    </div>
    ) 
}