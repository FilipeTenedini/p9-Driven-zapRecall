import PropTypes from 'prop-types';

export const Footer = ({corrects, doubts, errors}) => {
    return (
      <div>
        Footer
      </div>
    );
  }
  
  Footer.propTypes = {
    corrects: PropTypes.number.isRequired,
    doubts: PropTypes.number.isRequired,
    errors: PropTypes.number.isRequired
  }