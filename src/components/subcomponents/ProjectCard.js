import React, { useRef } from "react";
import PropTypes from 'prop-types';
import './ProjectCard.css';
import useElementOnScreen from "../../hooks/useElementOnScreen";
import { TOOL_ICON_MAP } from '../../constants/toolIconMapping';
import { INTERSECTION_OBSERVER_OPTIONS } from '../../constants';

/**
 * Renders tool icons based on the project's tools string
 * @param {string} tools - Comma-separated string of tool names
 * @returns {React.ReactNode[]} Array of icon elements
 */
const renderToolIcons = (tools) => {
    return Object.entries(TOOL_ICON_MAP).map(([toolName, config]) => {
        if (tools.includes(toolName)) {
            const IconComponent = config.icon;
            return <IconComponent key={toolName} className={config.className} />;
        }
        return null;
    }).filter(Boolean);
};

/**
 * ProjectCard component displays a single project with its image, tools, and description
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data object
 * @param {string} props.project.title - Project title
 * @param {string} props.project.tools - Comma-separated string of tools/technologies used
 * @param {string[]} props.project.description - Array of description bullet points
 * @param {string} props.project.image - Path to project image
 * @param {string|null} props.project.link - External link to project (optional)
 * @param {string|null} props.project.pdf - Link to PDF documentation (optional)
 * @param {string} props.project.key - Unique key for CSS class modifiers
 */
const ProjectCard = ({ project }) => {
    const targetRef = useRef(null);
    const isVisible = useElementOnScreen({
        ...INTERSECTION_OBSERVER_OPTIONS,
        threshold: 0.3
    }, targetRef, true);

    const hasLink = project.link != null || project.pdf != null;

    const handleCardClick = () => {
        if (hasLink) {
            window.open(project.link);
        }
    };

    const descriptionElements = project.description.map((sentence, index) => (
        <p key={index} className="bulletpoint">{sentence}</p>
    ));

    const cardClasses = [
        'square',
        isVisible ? 'animate pop' : '',
        !hasLink ? 'null' : ''
    ].filter(Boolean).join(' ');

    return (
        <div
            onClick={hasLink ? handleCardClick : null}
            className={cardClasses}
            style={{ visibility: isVisible ? 'visible' : 'hidden' }}
            ref={targetRef}
        >
            <a href={project.pdf} target="blank">
                <img
                    className="project_image"
                    src={`${process.env.PUBLIC_URL}${project.image}`}
                    alt={project.title}
                />
                <div className={`content ${project.key}`}>
                    {renderToolIcons(project.tools)}
                </div>
                <div className="project_overlay">
                    <div className="project_title">{project.title}</div>
                    <p className={`project_desc ${project.key}`}>{descriptionElements}</p>
                </div>
            </a>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        tools: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
        image: PropTypes.string.isRequired,
        link: PropTypes.string,
        pdf: PropTypes.string,
        key: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;
