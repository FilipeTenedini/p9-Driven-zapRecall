import { Container } from './style';
import PropTypes from 'prop-types';
import correctIcon from '../../assets/icone_certo.png'
import doubtIcon from '../../assets/icone_quase.png'
import errorICon from '../../assets/icone_erro.png'
import { cards } from '../../data/mock';
import { FlashCard } from '../flashcard'
import { rootColors } from '../../constants/colors';

export const CardsArea = ({corrects, setCorrects, doubts, setDoubts, errors, setErrors}) => {

    function addTolist(listType, item){
      if (listType === 'correct'){
        console.log(listType, item)
        setCorrects([...corrects, item])
      } else if (listType === 'doubt'){
        setDoubts([...doubts, item])
        console.log(listType, item)
      } else {
        setErrors([...errors, item])
        console.log(listType, item)
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
