import { Container } from './style';
import PropTypes from 'prop-types';
import correctIcon from '../../assets/icone_certo.png'
import doubtIcon from '../../assets/icone_quase.png'
import errorICon from '../../assets/icone_erro.png'
import { cards } from '../../data/mock';
import { FlashCard } from '../flashcard'
import { rootColors } from '../../constants/colors';

export const CardsArea = ({corrects, setCorrects, doubts, setDoubts, errors, setErrors, completeds, setCompleteds}) => {

    function addTolist(listType, item){
      if (listType === 'correct'){
        setCorrects([...corrects, item])
        setCompleteds([...completeds, correctIcon])
      } else if (listType === 'doubt'){
        setDoubts([...doubts, item])
        setCompleteds([...completeds, doubtIcon])
      } else {
        setErrors([...errors, item])
        setCompleteds([...completeds, errorICon])
      }
    }

    return (
      <Container>
        
        {cards.map( item =>(
          <FlashCard 
            key={item.id}
            item={item}
            color={corrects.includes(item.id) ? rootColors.correctColor : doubts.includes(item.id) ? rootColors.doubtColor : errors.includes(item.id) ? rootColors.errorColor : rootColors.lightBlack }
            icon={corrects.includes(item.id) ? correctIcon : doubts.includes(item.id) ? doubtIcon : errors.includes(item.id) ? errorICon : null }
            setItem={(listType, item) => addTolist(listType, item)}
            disabled={(corrects.includes(item.id) || doubts.includes(item.id) || errors.includes(item.id)) ? true : false}
            dataTest={corrects.includes(item.id) ? "zap-icon" : doubts.includes(item.id) ? "partial-icon" : errors.includes(item.id) ? "no-icon" : "play-btn"}
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
