import PropTypes from 'prop-types';
import { ResultArea } from './style';

export const Footer = ({correctsQt, doubtsQt, errorsQt}) => {

    return (
      <ResultArea>
        {correctsQt + doubtsQt + errorsQt } / 8 concluídas.
      </ResultArea>
    );
  }
  
  Footer.propTypes = {
    corrects: PropTypes.number,
    doubts: PropTypes.number,
    errors: PropTypes.number
  }