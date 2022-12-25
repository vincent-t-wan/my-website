import React, { useRef } from "react";
import './ProjectCard.css';
import useElementOnScreen from "../../hooks/useElementOnScreen";

import { SiCplusplus } from 'react-icons/si'

import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'

import { SiNodedotjs } from 'react-icons/si'
import { SiReact } from 'react-icons/si'

import { SiAndroidstudio } from 'react-icons/si'
import { SiKotlin } from 'react-icons/si'

import { SiUnity } from 'react-icons/si'
import { SiCsharp } from 'react-icons/si'

import { SiPostgresql } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiDocker } from 'react-icons/si';
import { SiC } from 'react-icons/si';

const ProjectCard = (props) => {
    console.log(props);
    const project = props.project;
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
    const renderUnity = () => {
        if (project.tools.includes("Unity")) return <SiUnity class="unity" />
    }
    const renderCSharp = () => {
        if (project.tools.includes("C#")) return <SiCsharp class="csharp" />
    }
    const renderPostgresql = () => {
        if (project.tools.includes("PostgreSQL")) return <SiPostgresql class="postgresql" />
    }
    const renderPython = () => {
        if (project.tools.includes("Python")) return <SiPython class="python" />
    }
    const renderDocker = () => {
        if (project.tools.includes("Docker")) return <SiDocker class="docker" />
    }
    const renderC = () => {
        if (project.tools.includes("C")) return <SiC class="c" />
    }

    const image = project.image;

    const targetRef = useRef(null);
    const isVisible = useElementOnScreen({
        root: null, 
        rootMargin: '0px', 
        threshold: 0.3
    }, targetRef, true);
    
    return (
        <div onClick={() => { window.location.href = project.link }}
        class={`${isVisible ? 'square animate pop' : 'square'}`} 
        style={{ visibility: `${isVisible ? 'visible' : 'hidden'}` }}
        ref={targetRef}
        >
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
                {renderUnity()}
                {renderCSharp()}
                {renderPostgresql()}
                {renderPython()}
                {renderDocker()}
                {renderC()}
            </div>
            <div class="project_overlay">
                <div class="project_title">{project.title}</div>
                <p class="project_desc">{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;