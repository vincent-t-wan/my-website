/**
 * Experience section component
 * Displays work experience in a vertical timeline format
 */

import './Experience.css';
import React from "react";
import { experiencedata } from "../experiencedata";
import { SiMicrosoftazure } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BoldText from '../utils/boldText';

/**
 * Determines the appropriate icon based on experience title
 * @param {string} title - Experience title
 * @returns {React.ReactNode} Icon component
 */
const getExperienceIcon = (title) => {
  return title.includes("Azure") ? <SiMicrosoftazure /> : <FaCode />;
};

/**
 * Handles opening external link in new window
 * @param {string} link - URL to open
 */
const handleTimelineClick = (link) => {
  window.open(link);
};

/**
 * Experience component displaying work history
 */
export default function Experience() {
  return (
    <section id="experiences">
      <div className="exp">
        <h1>Experience</h1>
      </div>
      <div className="experiences">
        <VerticalTimeline>
          {experiencedata.map((experience) => {
            const descriptionElements = experience.description.map((sentence, index) => (
              <BoldText key={index} text={sentence} />
            ));

            return (
              <VerticalTimelineElement
                key={experience.id}
                className="timeline-element"
                onTimelineElementClick={() => handleTimelineClick(experience.link)}
                date={experience.date}
                dateClassName="date"
                visible={false}
                icon={getExperienceIcon(experience.title)}
              >
                <h3 className="title">
                  <a href={experience.link} target="_blank" rel="noopener noreferrer">
                    {experience.title}
                  </a>
                </h3>
                <h5 className="subtitle">{experience.location}</h5>
                <p id="desc">{descriptionElements}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
