// The title section of the website.

import './Title.css';
import React, {useEffect} from "react";


//
async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      eleRef.append(letters[i]);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  async function deleteSentence(eleRef) {
    const sentence = eleRef.html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      eleRef.html(letters.join(""));
    }
  }
  
  //



export default function Title() {

    const [scrolled,setScrolled]=React.useState(true);
    const handleScroll=() => {
        const offset=window.scrollY;
          setScrolled(true);
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
      
    let navbarClasses=['navbar'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }


    return (

            <header className={navbarClasses.join(" ")}>

            <div className= "greeting">

            
                <span id="sentence" class="sentence">std::cout &lt;&lt; "Hello! I'm Vincent." &lt;&lt; std::endl;</span>
                <span class="input-line"></span>


                <script>
                  osuHOW???
                document.getElementById("sentence") = "ddd";

              </script>

              </div>
                </header>



    );
}