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