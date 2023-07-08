// The section of the website containing my work experience.

import './Experience.css';
import React, { useEffect } from "react";
import { experiencedata } from "../experiencedata";

import { SiMicrosoftazure } from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <section id="experiences">
      <div className="exp">
        <h1>
          Experience
        </h1>
        <p>
          Here is my experience!
        </p>
      </div>
      <div className="experiences">
        <VerticalTimeline>
          {experiencedata.map((experience) => {
            let isAzure = experience.title.includes("Azure");

            const description = experience.description.map((sentence) => {
              return <p class="bulletpoint">{sentence}</p>
            })

            return (
              <VerticalTimelineElement
                key={experience.id}
                date={experience.date}
                dateClassName="date"
                visible={false}
                icon={isAzure ? <SiMicrosoftazure /> : <FaCode />}
                iconOnClick={() => { window.open(experience.link) }}>
                <h3 classname="title"><a href={experience.link} target="_blank">
                  {experience.title}
                </a>
                </h3>
                <h5 classname="subtitle">
                  {experience.location}
                </h5>
                <p id="desc">{description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}