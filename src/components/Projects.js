// The section of the website containing my projects.

import React from "react";
import { projectdata } from "../projectdata";


import { SiCplusplus } from 'react-icons/si'

import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'

import { SiNodedotjs } from 'react-icons/si'
import { SiReact } from 'react-icons/si'


/*



              <div className="htmlicon">
              <SiHtml5 className="htmlicon" />


              <div className="cssicon">
              <SiCss3 className="cssicon" />


            
              <div className="jsicon">
              <SiJavascript className="jsicon" />



              <div className="njsicon">
              <SiNodedotjs className="njsicon" />

              <div className="reacticon">
              <SiReact className="reacticon" />




*/




export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">


              <div className="c++icon">
              <SiCplusplus className="c++icon" />


              
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                My Projects
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga dolore.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
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
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}