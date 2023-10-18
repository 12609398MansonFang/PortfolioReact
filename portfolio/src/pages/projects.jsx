import data from "../data/data.json";
import img1 from "../img/project4.jpg";
import img2 from "../img/project2.jpg";
import img3 from "../img/project3.jpg";

export default function Projects(){
    return(

        <section id = "projectsSection" className="projectspage_section">
            <div className="projectcontainer_section">

                <a className="project1" href="https://github.com/12609398MansonFang/protectcheesepy.git">

                    <div className="project1_image">
                        <img src = {img1}></img>
                    </div>

                    <div className="project1_content">
                        <h1 className = "project1_title">Project 1: {data.projects[3].name} </h1>
                        <p className="project1_description"> {data.projects[3].description} </p>
                    </div>

                </a>

                <a className="project2" href="https://github.com/12609398MansonFang/jsgame.git">

                    <div className="project2_image">
                        <img src = {img2}></img>
                    </div>

                    <div className="project2_content">
                        <h1 className = "project2_title">Project 2: {data.projects[1].name}</h1>
                        <p className="project2_description"> {data.projects[1].description} </p>
                        {/* <button className= "project2_btn">GitHub</button> */}
                    </div>

                </a>

                <a className="project3" href="https://github.com/12609398MansonFang/porfolioreact.git">

                    
                        <div className="project3_image">
                            <img src = {img3}></img>
                        </div>

                    <div className="project3_content">
                        <h1 className = "project3_title">Project 3: {data.projects[2].name}</h1>
                        <p className="project3_description"> {data.projects[2].description} </p>
                        {/* <button className= "project3_btn">GitHub</button> */}
                    </div>

                </a>

            </div>
        </section>

    );
}