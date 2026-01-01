/**
 * Projects section component
 * Displays a gallery of project cards
 */

import './Projects.css';
import React from "react";
import ProjectCard from './subcomponents/ProjectCard';
import { projectdata } from "../projectdata";

/**
 * Projects component displaying the project showcase section
 */
export default function Projects() {
  return (
    <section id="projects">
      <div className="projects">
        <h1>My Projects</h1>
      </div>
      <div className="projectgallery">
        {projectdata.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
