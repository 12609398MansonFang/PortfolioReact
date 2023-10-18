import Home from "./pages/home";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Contactme from "./pages/contactme";
import Navigationbar  from "./navigationbar";
import Wallpaper from "./pages/wallpaper";
import Footer from "./pages/footer";

export default function Pages(){
    return (
        <div>
            <Navigationbar/>
            <Wallpaper/>
            <Home/>
            <Education/>
            <Projects/>
            <Experience/>
            <Contactme/>
            <Footer/>
        </div>
    );
}