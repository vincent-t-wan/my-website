// The section of the website containing my work experience.

import './Experience.css';
import React, { useEffect } from "react";
import { experiencedata } from "../experiencedata";

import { SiMicrosoftazure } from 'react-icons/si'
import { RiComputerLine } from 'react-icons/ri'
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
                icon={isAzure ? <SiMicrosoftazure /> : <RiComputerLine />}
                iconOnClick={() => { window.location.href = experience.link }}>
                <h3 classname="title"><a href={experience.link}>
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