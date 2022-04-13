// The section of the website which contains information about me.

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







export default function About() {
    return (
        <section id="about">
            <br></br>
            <div className= "greeting">

            
                <span id="sentence" class="sentence">std::cout &lt;&lt; "Hello! I'm Vincent." &lt;&lt; std::endl;</span>
                <span class="input-line"></span>


                <script>
                  osuHOW???
                document.getElementById("sentence") = "ddd";

              </script>

              
              
            </div>

            

          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                <br className="hidden lg:inline-block" />I love to build amazing
                apps.
              </h1>
              <p className="mb-8 leading-relaxed">
                Ever since ... (insert cliche paragraph here)
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contacts
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  My Projects
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );
}