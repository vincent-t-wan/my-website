/**
 * Title section component
 * Displays animated typing title with greeting message
 */

import './Title.css';
import React from "react";
import { TypeAnimation } from 'react-type-animation';

/**
 * Animation sequence configuration for the TypeAnimation component
 * Each pair consists of a text string followed by duration in milliseconds
 */
const ANIMATION_SEQUENCE = [
  'print("Hello! I\'m Vincent.")',
  5000,
  'std::cout << "Hello! I\'m Vincent." << std::endl;',
  5000,
  'console.log(\'Hello! I\'m Vincent.\')',
  5000,
  'Console.WriteLine("Hello! I\'m Vincent.");',
  5000,
];

/**
 * Title component displaying animated greeting
 */
const Title = () => {
  return (
    <header className="title">
      <div className="greeting">
        <TypeAnimation
          sequence={ANIMATION_SEQUENCE}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '1em' }}
          className="type"
        />
      </div>
      <div className="greetingsub">
        <p>A developer, tech enthusiast, and math enjoyer</p>
        <h6>Scroll down to learn more about me!</h6>
        <p className="arrow-container">
          <i className="arrow down"></i>
        </p>
        <br />
        <br />
        <br />
      </div>
    </header>
  );
};

export default Title;
