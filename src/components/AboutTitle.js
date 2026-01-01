import PropTypes from 'prop-types';
import './AboutTitle.css';

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
