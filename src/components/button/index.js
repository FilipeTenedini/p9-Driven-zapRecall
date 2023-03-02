export const Button = ({setCorrects, setDoubts, setErrors}) => {
    return (
      <div>
        Button
      </div>
    );
  }
  
CardsArea.propTypes = {
  setCorrects: PropTypes.func.isRequired,
  setDoubts: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
}
