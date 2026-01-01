/**
 * AboutTitle component
 * Displays a section heading for the About section
 */

import React from 'react';
import PropTypes from 'prop-types';
import './AboutTitle.css';

/**
 * AboutTitle component for section headings
 * @param {Object} props - Component props
 * @param {string} props.heading - The heading text to display
 */
export default function AboutTitle({ heading }) {
  return (
    <div className="abouttitle">
      <h2>{heading}</h2>
    </div>
  );
}

AboutTitle.propTypes = {
  heading: PropTypes.string,
};

AboutTitle.defaultProps = {
  heading: 'About Me',
};
