import React from 'react'
import './AboutTitle.css';


export default function AboutTitle({
    heading = 'About Me'

}) {
    return (
        <div class="abouttitle">
            <h2>
                {heading}
            </h2>
        </div>
    )
}