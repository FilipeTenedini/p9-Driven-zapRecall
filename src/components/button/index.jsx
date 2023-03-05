import PropTypes from 'prop-types';
import { MyButton } from './style';



export const Button = ({color, text, listType, returnToInitial}) => {
    return (
      <MyButton
        bgColor={color}
        onClick={() => returnToInitial(color, listType)}
      >
        {text}
      </MyButton>
    );
  }
  
Button.propTypes = {
  returnToInitial: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
}
