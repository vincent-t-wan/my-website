import React from 'react';
import PropTypes from 'prop-types';

const BOLD_TEXT_REGEX = /_(.*?)_/g;

/**
 * Parses text and returns an array of React elements with bold formatting
 * @param {string} text - Input text with underscore-wrapped bold markers
 * @returns {React.ReactNode[]} Array of React elements
 */
const parseBoldText = (text) => {
  return text.split(BOLD_TEXT_REGEX).map((part, index) => {
    if (index % 2 === 1) {
      return (
        <strong key={index} style={{ fontWeight: 'bold' }}>
          {part}
        </strong>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

const BoldText = ({ text }) => {
  return <p className="bulletpoint">{parseBoldText(text)}</p>;
};

BoldText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BoldText;
