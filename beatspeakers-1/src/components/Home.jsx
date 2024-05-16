
import { Welcome } from './Welcome';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';
export const Home = () => {
    

    return(
    <div id="home" className="w-screen h-screen">
        <Welcome/>
        
        <Contact/>
        <Footer/>
    </div>
    ) 
}