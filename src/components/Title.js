// The title section of the website.

import './Title.css';
import React, { Component } from "react";
import { TypeAnimation } from 'react-type-animation';

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className={"title"}>
        <div className="greeting">
        <TypeAnimation
          sequence={[
            'print("Hello! I\'m Vincent.")',
            5000, // Wait 5s
            'std::cout << "Hello! I\'m Vincent." << std::endl;',
            5000, // Wait 5s
            'console.log(\'Hello! I\'m Vincent.\')',
            5000, // Wait 5s
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '1em' }}
          className='type'
        />
        </div>
        <div className="greetingsub">
          <p>
            A 3A Computer Science student at the University of Waterloo.
          </p>
          <h6>Scroll down to learn more about me!</h6>
          <p><i class="arrow down"></i></p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </header>
    );
  }
}

export default Title;



