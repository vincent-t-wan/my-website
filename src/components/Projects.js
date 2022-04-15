// The section of the website containing my projects.

import './Projects.css';
import React, {useEffect} from "react";
import { projectdata } from "../projectdata";


import { SiCplusplus } from 'react-icons/si'

import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'

import { SiNodedotjs } from 'react-icons/si'
import { SiReact } from 'react-icons/si'



export default function Projects() {
    return (
        <section id="projects">
          <div className="projects">
              <h1>
                My Projects
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga dolore.
              </p>
            </div>
            <div className="project">

              


              


              {projectdata.map((project) => (
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
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <SiCplusplus className="c++icon" />

              <SiHtml5 className="htmlicon" />


    
              <SiCss3 className="cssicon" />


              <SiJavascript className="jsicon" />


              <SiNodedotjs className="njsicon" />

            
              <SiReact className="reacticon" />

                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
        </section>
      );
}