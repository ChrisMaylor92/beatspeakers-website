import { Carousel } from "./Carousel"

export const Gallery = () => {
    
    return (
        <div id="about" className="w-screen f-screen ">
            <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-300 text-4xl">
                <p className="pb-10">Gallery</p>
                <Carousel/>
               
                        
             </div>
        </div>
    )
}