import PropTypes from 'prop-types';

export const CardsArea = ({setCorrects, setDoubts, setErrors}) => {
    return (
      <div>
        ...
      </div>
    );
  }
  

CardsArea.propTypes = {
  setCorrects: PropTypes.func.isRequired,
  setDoubts: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
}
