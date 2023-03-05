import { useState } from "react";
import logo from '../../assets/logo.png';
import { Header, Container } from './style';
import { CardsArea } from '../cardsArea';
import { Footer } from '../footer';

export const TestArea = () => {
  const [corrects, setCorrects] = useState([])
  const [doubts, setDoubts] = useState([])
  const [errors, setErrors] = useState([])
  const [completeds, setCompleteds] = useState([])

  return (
      <Container>
        <Header>
          <img src={logo} alt="zap recall logo" /> 
          <h1>ZapRecall</h1>
        </Header>
        <CardsArea 
          corrects={corrects}
          setCorrects={setCorrects}
          doubts={doubts}
          setDoubts={setDoubts}
          errors={errors}
          setErrors={setErrors}
          completeds={completeds}
          setCompleteds={setCompleteds}
        />
        <Footer 
          correctsQt={corrects.length}
          doubtsQt={doubts.length}
          errorsQt={errors.length}
          completeds={completeds}
        />
      </Container>
    );
  }
  