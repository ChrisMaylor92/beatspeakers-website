import { Footer } from "./Footer"
import workshop1 from "../assets/WorkshopKids2 - Copy.jpg"
import workshop2 from "../assets/Lakefest.jpg"
import workshop3 from "../assets/LoopStationKid.jpg"
import { Contact } from "./Contact"
export const Workshops = () => {
    return (
        
        <div id="about" className="w-screen h-screen">
            <div className="grid grid-rows-4 gap-10 items-center w-screen pb-16 text-gray-300 ">
                <h1 className="w-screen font-bold text-7xl pt-20">Workshop Offers</h1>
                <div className="grid items-center justify-center w-screen h-full ">
                
                    <div className="grid grid-cols-4 rounded-2xl border-2 border-[#43ad2e] mx-60 p-5 bg-[#121212]">
                        <img className="w-100% " src={workshop3} alt="logo" />
                        <div className="col-span-3 pl-5">
                            <p className="text-4xl font-bold text-start pb-2 border-b-2">
                                Beatbox Taster Workshop
                            </p>
                            <p className="pt-5 text-xl text-start">
                                A fun, exciting and highly engaging introduction to beatboxing, in which participants witness a performance, learn the fundamentals of beatboxing and perform what they’ve learnt on a microphone and loop station. A beatbox taster workshop works great for up to 30 participants.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="grid items-center justify-center w-screen h-full ">
                    <div className="grid grid-cols-4  rounded-2xl border-2 border-[#43ad2e] mx-60 p-5 bg-[#121212]">
                    <img className="w-100% " src={workshop2} alt="logo" />
                    <div className="col-span-3 pl-5">
                        <p className="text-4xl font-bold text-start pb-2 border-b-2">
                        Beatbox Assembly or Conference
                        </p>
                        <p className="pt-5 text-xl text-start">
                        With a few small changes, the Beatbox Taster Workshop works great with much bigger audiences and crowds. Highly engaging and entertaining for everyone involved and with only enough time for a select number to perform; there is space to hide for those who can’t quite make heads and tails of their boots and cats. 
                        </p>
                    </div>
                    </div>
                </div>
                <div className="grid items-center justify-center w-screen h-full ">
                    <div className=" grid grid-cols-4 rounded-2xl border-2 border-[#43ad2e] mx-60 p-5 bg-[#121212]">
                    <img className="w-100% " src={workshop1} alt="logo" />
                    <div className="col-span-3 pl-5">
                        <p className="text-4xl font-bold text-start pb-2 border-b-2">
                        6 Week Beatbox Course
                        </p>
                        <p className="pt-5 text-xl text-start">
                        An intensive beatbox course consisting of 6 workshops that culminates in a performance. Progressing from beginner up to performance level, participants explore the 4 pillars of beatboxing; Solo, Tag Team, Loopstation and Group, whilst developing original pieces of vocal music that will be recorded and performed in front of friends and family.  
                        </p>
                        </div>
                    </div>
                </div>      
             </div>
             <Contact/>
             <Footer/>
        </div>
    )
}