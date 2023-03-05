import styled, { css, keyframes } from "styled-components";
import { rootColors } from "../../constants/colors";

export const scaleDownCenter = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
`

export const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${({openedFlashCard}) => openedFlashCard ? "131px" : "65px"};
    margin-bottom: 25px;
    position: relative;
    transition: all 1s ease;
    -webkit-animation: ${({isAnswer}) => isAnswer && css`${scaleDownCenter} 0.6s ease-in both`};
	        animation: ${({isAnswer}) => isAnswer && css`${scaleDownCenter} 0.6s ease-in both`};
`
export const CardContent = styled.div`
    background-color: ${rootColors.white};
    border-radius: 5px;
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 1s ease;
    transform: ${({openedFlashCard}) => openedFlashCard && "rotateY(180deg)"};
`
export const FrontFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backface-visibility: hidden;
`
export const QuestionNumber = styled.div`
    margin-left: 15px;
    color: ${({color}) => color};
    font-weight: 700;
    text-decoration: ${({mode}) => mode === 0 && 'line-through'};
`
export const QuestionIcon = styled.img`
    width: ${({type}) => type === 'play' ? "20px" : "30px" };
    height: ${({type}) => type === 'play' ? "23px" : "20px" };
    margin-right: 15px;
    cursor: pointer;
`

export const BackFace = styled.div`
    background-color: ${rootColors.yellow};
    border-radius: 5px;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    backface-visibility: hidden;
    transform: rotateY(180deg);

`


export const UpSide = styled.div`
    width: 100%;
    height: 80%;

    p{
        padding: 10px;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
    }
`
export const DownSide = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
export const ButtonsArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
`

