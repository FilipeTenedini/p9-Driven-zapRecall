import { useState } from "react";
import { Header } from '../header';
import { CardsArea } from '../cardsArea'
import { Footer } from '../footer';

export const TestArea = () => {
  const [corrects, setCorrects] = useState(0)
  const [doubts, setDoubts] = useState(0)
  const [errors, setErrors] = useState(0)
  
  return (
      <>
        <Header />
        <CardsArea 
          setCorrects={setCorrects}
          setDoubts={setDoubts}
          setErrors={setErrors}/>
        <Footer 
          corrects={corrects}
          doubts={doubts}
          errors={errors}
        />
      </>
    );
  }
  