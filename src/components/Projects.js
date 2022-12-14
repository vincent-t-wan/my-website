// The section of the website containing my projects.

import './Projects.css';
import React, { useEffect } from "react";
import { projectdata } from "../projectdata";

import { SiCplusplus } from 'react-icons/si'

import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'

import { SiNodedotjs } from 'react-icons/si'
import { SiReact } from 'react-icons/si'

import { SiAndroidstudio } from 'react-icons/si'
import { SiKotlin } from 'react-icons/si'


import Image from './resources/me.png'


import { Link } from "react-router-dom";



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
        {projectdata.map((project) => {
          const renderCpp = () => {
            if (project.tools.includes("C++")) return <SiCplusplus class="cpp" />
          }
          const renderHTML = () => {
            if (project.tools.includes("HTML")) return <SiHtml5 class="html" />
          }
          const renderCSS = () => {
            if (project.tools.includes("CSS")) return <SiCss3 class="css" />
          }
          const renderJS = () => {
            if (project.tools.includes("JavaScript")) return <SiJavascript class="js" />
          }
          const renderNJS = () => {
            if (project.tools.includes("Node.js")) return <SiNodedotjs class="njs" />
          }
          const renderReact = () => {
            if (project.tools.includes("React")) return <SiReact class="react" />
          }
          const renderAS = () => {
            if (project.tools.includes("Android Studio")) return <SiAndroidstudio class="android" />
          }
          const renderKotlin = () => {
            if (project.tools.includes("Kotlin")) return <SiKotlin class="kotlin" />
          }

          const image = project.image

          return (
            <div class="square" onClick={() => { window.location.href = project.link }}>
              <img class="project_image" src={`${process.env.PUBLIC_URL}${image}`} />
              <div class="content">
                {renderCpp()}
                {renderHTML()}
                {renderCSS()}
                {renderJS()}
                {renderNJS()}
                {renderReact()}
                {renderAS()}
                {renderKotlin()}
              </div>
              <div class="project_overlay">
                <div class="project_title">{project.title}
                </div>
                <p class="project_desc">{project.description}</p>
              </div>
            </div>
          )
        })}
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