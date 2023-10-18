import data from "../data/data.json";
import img from "../img/home.jpeg";

export default function Home(){ 
    return(
        
        <section id = "homeSection" className="homepage_section">
        
            <div className = "home_container">

                <div className= "homecontent_content">
                    <h1 className = "homecontent_title">{data.home[0].title}</h1>
                    <h2 className= "homecontent_role">{data.home[0].role}</h2>
                    <p className = "homecontent_description">{data.home[0].description}</p>
                </div>
                
                <div className="homecontent_image">
                    <img src = {img}></img> 
                </div>

            </div>

        </section>

    );
}