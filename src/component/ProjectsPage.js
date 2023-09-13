import { CarouselProjectData } from "./CarouselProjectData";
import React, { Component } from "react";


class ProjectsPage extends Component {
    render() {
        return (
            <div className="projects-container flex flex-col items-center text-white p-4">
                {CarouselProjectData.map((project, index) => (
                  
                <article key={index} class="md:w-3/5 flex flex-col shadow my-4">
                    
                    <img className=" " src={project.image} alt={project.title} />
    
                     <div class="bg-gray-800 flex flex-col justify-start p-6">
                         <a href="#" class="text-3xl font-bold hover:text-gray-700 text-white pb-4">{project.title}</a>
                         
                         <a href="#" class="pb-6 text-white">{project.desc}</a>
                         <div className="tech-logos h-8 w-8">
                            <img src={project.tech1} alt="Tech 1" />
                            {project.tech2 && <img src={project.tech2} alt="Tech 2" />}
                        </div>
                        <div className="project-links">
                            {project.start && <a href={project.start} target="_blank" rel="noopener noreferrer">Start</a>}
                            {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>}
                        </div>
                     </div>
                 </article>
                  ))}
            </div>
             
        );
    }
}
export default ProjectsPage;
