import { useState } from "react";
import { Card, QuestionNumber, QuestionIcon, CardContent, FrontFace, BackFace, UpSide, DownSide, ButtonsArea } from './style';
import PropTypes from 'prop-types';
import playIcon from '../../assets/seta_play.png';
import changeContent from '../../assets/seta_virar.png';
import { rootColors } from "../../constants/colors";
import { Button } from '../button';

export const FlashCard = ({item, color, icon, setItem}) => {
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
  const returnToInitial = (color, list) => {
    setOpenedFlashCard(false);
    setIsAnswer(false);
    setMode(0);
    setItem(list, item.id)
  }

  return (
    <Card openedFlashCard={openedFlashCard} isAnswer={isAnswer}>
      <CardContent openedFlashCard={openedFlashCard}>

        <FrontFace>
          <QuestionNumber color={color} mode={mode}> Pergunta {item.id} </QuestionNumber>
          <QuestionIcon src={icon || playIcon} type={'play'} onClick={changeCardMode } />
        </FrontFace>

        {(mode === 2 || mode === 3) && 
          <BackFace openedFlashCard={openedFlashCard}>
              <UpSide>
                {mode === 2 
                  ? <p>
                      {item.question}
                    </p>

                  : <p>
                      {item.answer}
                    </p>
                }
              </UpSide>
              <DownSide>
                {mode === 2 
                  ? <QuestionIcon src={changeContent} onClick={showAnswer}/>

                  : <ButtonsArea>
                      <Button
                        color={rootColors.errorColor}
                        listType={'error'}
                        text={'Não lembrei'}
                        returnToInitial={returnToInitial}
                      />
                      <Button
                        color={rootColors.doubtColor}
                        listType={'doubt'}
                        text={'Quase não lembrei'}
                        returnToInitial={returnToInitial}
                      />
                      <Button
                        color={rootColors.correctColor}
                        listType={'correct'}
                        text={'Zap!'}
                        returnToInitial={returnToInitial}
                      />
                    </ButtonsArea>
                }
              </DownSide>
          </BackFace>
        }
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
  color: PropTypes.string.isRequired,
  icon: PropTypes.string,
}