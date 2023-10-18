import data from "../data/data.json";
import img from "../img/utslogo.png";

export default function Education(){
    return(

        <section id = "educationSection" className="educationpage_section">

            <div className = "education_container">

                <div className="education_content">                   
                    <h1 className= "university_name">{data.education[0].institude}</h1>
                    <p className= "university_course">{data.education[0].course}</p>
                    <p className= "university_duration">{data.education[0].duration}</p>                                                   
                </div>

                <div className="education_image">
                    <img src = {img}></img>
                </div>

            </div>  

        </section>
        
    );
}