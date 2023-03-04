import PropTypes from 'prop-types';
import { ResultArea } from './style';

export const Footer = ({corrects, doubts, errors}) => {
    return (
      <ResultArea>
        
      </ResultArea>
    );
  }
  
  Footer.propTypes = {
    corrects: PropTypes.number.isRequired,
    doubts: PropTypes.number.isRequired,
    errors: PropTypes.number.isRequired
  }