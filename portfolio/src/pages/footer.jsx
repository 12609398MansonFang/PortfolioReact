import React from "react";
import { Link } from "react-scroll";

export default function Footer(){
    return (
        
        <section id = "footerSection" className="footer_section">
            <nav>
                <ul className="footer_container">
                    
                    <li>
                        <Link className = "homelink" to = "homeSection" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link className = "educationlink" to = "educationSection" smooth={true} duration={500}>Education</Link>
                    </li>
                    <li>
                        <Link className = "projectslink" to = "projectsSection" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li>
                        <Link className = "experiencelink" to = "experienceSection" smooth={true} duration={500}>Experience</Link>
                    </li>
                    
                </ul>
            </nav>
        </section>

    );
}