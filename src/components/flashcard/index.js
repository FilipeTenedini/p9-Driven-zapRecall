import { useState } from "react";
import { Card, QuestionNumber, QuestionIcon, CardContent, FrontFace, BackFace, BackFaceContent, UpSide, DownSide, ButtonsArea} from './style';
import PropTypes from 'prop-types';
import playIcon from '../../assets/seta_play.png';
import changeContent from '../../assets/seta_virar.png';

export const FlashCard = ({item, setCorrects, setDoubts, setErrors}) => {
  const [mode, setMode] = useState(1);
  const [openedFlashCard, setOpenedFlashCard] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const changeCardMode = () => {
    setOpenedFlashCard(true)
    setMode(mode+1);
  }

  const showAnswer = () => {
    setIsAnswer(true)
    setTimeout(()=>{
      setMode(mode+1);
    }, 500);
  }

  return (
      <Card openedFlashCard={openedFlashCard} isAnswer={isAnswer}>
        <CardContent openedFlashCard={openedFlashCard}>
          
          <FrontFace>
            <QuestionNumber> Pergunta {item.id} </QuestionNumber>
            <QuestionIcon src={playIcon} type={'play'} onClick={changeCardMode } />
          </FrontFace>

          <BackFace>
            <BackFaceContent openedFlashCard={openedFlashCard}>
              { mode === 2 
                ? <>
                    <UpSide>
                      <p>
                        {item.question}
                      </p>
                    </UpSide>
                    <DownSide>
                      <QuestionIcon src={changeContent} onClick={showAnswer}/>
                    </DownSide>
                  </>
                : <>
                    <UpSide>
                      <p>
                        {item.answer}
                      </p>
                    </UpSide>
                    <DownSide>
                      <ButtonsArea>
                        <button onClick={() => console.log('s')}>sim</button>
                        <button onClick={() => console.log('t')}>talvez</button>
                        <button onClick={() => console.log('n')}>não</button>
                      </ButtonsArea>
                    </DownSide>
                  </>
              }
            </BackFaceContent>
          </BackFace>
        </CardContent>
      </Card>
    );
  }



FlashCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string
  }),
  setCorrects: PropTypes.func.isRequired,
  setDoubts: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired
}