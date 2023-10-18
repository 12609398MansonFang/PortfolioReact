import img1 from '../img/experience.jpg';
import data from "../data/data.json";

export default function Experience(){
    return(

        <section id = "experienceSection" className="experiencepage_section">
            <div className="experiencecontainer_section">
                
                <div className="experience_image">
                    <img src = {img1}></img>
                </div>

                <div className="experience_content">

                    <div className = "company1">
                        <h1 className="companyname_1">{data.experience[0].name}</h1>
                        <h2 className="companyposition_1">{data.experience[0].position}</h2>
                        <p className="companyrole_1">{data.experience[0].description}</p>
                        <p className="companyduration_1">{data.experience[0].duration}</p>
                    </div>
                    
                    <div className = "company2">
                        <h1 className="companyname_2">{data.experience[1].name}</h1>
                        <h2 className="companyposition_2">{data.experience[1].position}</h2>
                        <p className="companyrole_2">{data.experience[1].description}</p>
                        <p className="companyduration_2">{data.experience[1].duration}</p>
                    </div>

                    <div className = "company3">
                        <h1 className="companyname_3">{data.experience[2].name}</h1>
                        <h2 className="companyposition_3">{data.experience[2].position}</h2>
                        <p className="companyrole_3">{data.experience[2].description}</p>
                        <p className="companyduration_3">{data.experience[2].duration}</p>
                    </div>

                </div>

            </div>
        </section>
        
    );
}