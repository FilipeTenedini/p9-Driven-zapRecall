import { useState } from "react";
import { Container } from "./style";
import { StartRecall } from '../startRecall';
import { TestArea } from '../testArea'

function App() {
  const [recalling, setRecalling] = useState(false);

  return (
    <Container>
      {recalling
        ? <TestArea /> 
        : <StartRecall 
          setRecalling={setRecalling}
        /> 
      }
    </Container>
  );
}

export default App;