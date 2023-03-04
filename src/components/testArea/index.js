import { useState } from "react";
import logo from '../../assets/logo.png';
import { Header, Container } from './style';
import { CardsArea } from '../cardsArea';
import { Footer } from '../footer';

export const TestArea = () => {
  const [corrects, setCorrects] = useState([])
  const [doubts, setDoubts] = useState([])
  const [errors, setErrors] = useState([])
  
  

  return (
      <Container>
        <Header>
          <img src={logo} alt="zap recall logo" /> 
          <h1> ZapRecall</h1>
        </Header>
        <CardsArea 
          setCorrects={setCorrects}
          setDoubts={setDoubts}
          setErrors={setErrors}/>
        <Footer 
          corrects={corrects}
          doubts={doubts}
          errors={errors}
        />
      </Container>
    );
  }
  