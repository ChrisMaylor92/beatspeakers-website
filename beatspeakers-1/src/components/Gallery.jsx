import ultragrade from '../assets/video3.mp4'
export const Gallery = () => {
    return (
        <div id="about" className="w-screen f-screen ">
            <div className="flex items-center justify-center w-screen h-screen text-gray-300 text-2xl">
                <p>About us</p>
                <div className="flex items-center justify-center">
                                <ReactPlayer
                                    url={ultragrade}
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
        </div>
    )
}