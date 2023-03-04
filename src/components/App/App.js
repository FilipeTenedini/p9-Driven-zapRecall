import { useState } from "react";
import { Container } from "./style";
import { StartRecall } from '../startRecall';
import { TestArea } from '../testArea'

function App() {
  const [recalling, setRecalling] = useState(true);

  return (
    <Container>
      {recalling
        ? <TestArea /> 
        : <StartRecall /> 
      }
    </Container>
  );
}

export default App;