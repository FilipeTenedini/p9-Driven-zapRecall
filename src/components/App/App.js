import { useState } from "react";
import { StartRecall } from '../startRecall';
import { TestArea } from '../testArea'
function App() {
  const [recalling, setRecalling] = useState(false);

  return (
    <>
    {recalling
      ? <TestArea /> 
      : <StartRecall /> 
    }
    </>
  );
}

export default App; 