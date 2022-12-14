// The title section of the website.

import './Title.css';
import React, { Component } from "react";
import Typing from 'react-typing-animation';

/*

const cpp = "Hello"
export async const typeCpp = (state, props) => ({
  let i = 0;
  while(i < cpp.length) {
    await waitForMs(delay);
    text: this.state.text + letters[i];
    i++;
  }
  text: state.text + ""


      
})




*/
class Title extends Component {
  waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  state = {
    text: ""
  }
  constructor(props) {
    super(props);
    this.typeSentence = this.typeSentence.bind(this);
  }
  async typeSentence(sentence, eleRef, delay = 100) {
    const letters = "ddddddd";
    let i = 0;
    while (i < letters.length) {
      await this.waitForMs(100)
      this.setState({
        text: this.state.text + letters[i]
      });
      i++;
    }
    return;
  }
  async deleteSentence(eleRef) {
    const sentence = eleRef.html();
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
      letters.pop();
      eleRef.html(letters.join(""));
    }
  }
  render() {
    return (
      <header className={"title"}>
        <div className="greeting">
          <Typing>
            <span id="sentence" class="sentence">std::cout &lt;&lt; "Hello! I'm Vincent." &lt;&lt; std::endl;</span>
            <Typing.Delay ms={5000} />
          </Typing>
          <span class="input-line"></span>
        </div>
        <div className="greetingsub">
          <p>
            A 2B Computer Science student at the University of Waterloo.
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



