import { useState } from "react";

export const FlashCard = ({setCorrects, setDoubts, setErrors}) => {
  const [mode, setMode] = useState();
  
    return (
      <div>
        FlashCard
      </div>
    );
  }
  
CardsArea.propTypes = {
  setCorrects: PropTypes.func.isRequired,
  setDoubts: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
}
 