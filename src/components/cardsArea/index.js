import { Container } from './style';
import PropTypes from 'prop-types';
import { cards } from '../../data/mock';
import { FlashCard } from '../flashcard'

export const CardsArea = ({setCorrects, setDoubts, setErrors}) => {
    return (
      <Container>
        
        {cards.map((item, index)=>(
          <FlashCard 
            key={item.id}
            item={item}
            setCorrects={setCorrects}
            setDoubts={setDoubts}
            setErrors={setErrors}
          />
        ))
        }
      
      </Container>
    );
  }
  

CardsArea.propTypes = {
  setCorrects: PropTypes.func.isRequired,
  setDoubts: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
}
