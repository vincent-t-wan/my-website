// The section of the website containing my projects.

import './Projects.css';
import React, { useRef } from "react";
import ProjectCard from './subcomponents/ProjectCard';

import { projectdata } from "../projectdata";


export default function Projects() {
  return (
    <section id="projects">
      <div className="projects">
        <h1>
          My Projects
        </h1>
        <p>
          Here is my project showcase!
        </p>
      </div>
      <div class="projectgallery">
        {projectdata.map((project) => <ProjectCard project={project}/>)}
      </div>
    </section>
  );
}

/*

 this goes in return
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={project.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.tools}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>

                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
                */