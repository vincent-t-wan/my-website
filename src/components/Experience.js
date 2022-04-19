// The section of the website containing my work experience.

import './Experience.css';
import React, {useEffect} from "react";
import { experiencedata } from "../experiencedata";

import { SiMicrosoftazure } from 'react-icons/si'
import { RiComputerLine } from 'react-icons/ri'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";


export default function Experience() {
      
    return (
        <section id="experiences">
          <div className="experiences">
              <h1 classname="exp">
                Experience
              </h1>
              <VerticalTimeline>
              {experiencedata.map((experience) => {
                let isAzure = experience.title.includes("Azure");
                return(
                <VerticalTimelineElement 
                key={experience.id} 
                date={experience.date}
                dateClassName="date"
                icon={isAzure ? <SiMicrosoftazure /> : <RiComputerLine />}
                iconOnClick={() => {window.location.href = experience.link}}>
                  <h3 classname="title"><a href={experience.link}>
                  {experience.title}
                  </a>

                  </h3>
                  <h5 classname="subtitle">
                  {experience.location}
                  </h5>
                  <p id="desc">{experience.description}</p>
                </VerticalTimelineElement>



                );
                })}
              </VerticalTimeline>

            </div>
            
        </section>
      );




}