import ultragrade from '../assets/Ultragrade1.mp4'
import ReactPlayer from 'react-player';

export const Gallery = () => {
    return (
        <div id="about" className="w-screen f-screen ">
            <div className="flex items-center justify-center w-screen h-screen text-gray-300 text-2xl">
                <p>Gallery</p>
                <div className="flex items-center justify-center">
                                <ReactPlayer
                                    url={ultragrade}
                                    loop={true}
                                    volume={1}
                                    playing={true}
                                    muted={true}
                                    width="50%"
                                    height="50%"
                                    controls
                                
                                /> 
                    </div>
               
                        
             </div>
        </div>
    )
}