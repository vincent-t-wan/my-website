import './Title.css';
import { TypeAnimation } from 'react-type-animation';
import { NAV_LINKS } from '../constants';

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
        <a href={NAV_LINKS.ABOUT}>
          <p className="arrow-container">
            <i className="arrow down"></i>
          </p>
        </a>
        <br />
        <br />
        <br />
      </div>
    </header>
  );
};

export default Title;
