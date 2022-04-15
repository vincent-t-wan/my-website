// The section of the website containing my work experience.

import './Experience.css';
import React, {useEffect} from "react";
import { experiencedata } from "../experiencedata";

export default function Experience() {


      
    return (
        <section id="experiences">
          <div className="experiences">
              <h1>
                Experience
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga dolore.
              </p>
            </div>
            <div className="experience">

            
              


              {experiencedata.map((experience) => (
                <a
                  href={experience.link}
                  key={experience.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={require("./" + experience.image)}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {experience.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {experience.title}
                      </h1>

                      <p className="leading-relaxed">{experience.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
        </section>
      );




}