import './App.css';
import Counter from './Counter';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1)
  const [maxCounter, setMaxCounter] = useState(10)
  const [reset,setReset] = useState(false)
  const [maxNumber, setMaxNumber] = useState(0)

  function updateMaxNumber(number){
    if (number > maxNumber) {
      setMaxNumber(number)
    }
  }

  function handleDelta(event){
    setDelta(Number(event.target.value))
  }

  function handleMax(event){
    setMaxCounter(Number(event.target.value))
  }

  function getReset(data){
    // data gets the value "true" from the son (Counter.js, where getReset(true))
      console.log(data)
      setReset(data)
  }

  return (
    <div className="App">
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      <p>
        limit: <input type = "number" value = {maxCounter} onChange = {handleMax}/>
      </p>
      <p>
        max number so far: {maxNumber}
      </p>
      
      <Counter delta = {delta} maxCounter = {maxCounter} getReset = {getReset} needToReset = {reset} updateMaxNumber = {updateMaxNumber} />
      <Counter delta = {delta} maxCounter = {maxCounter} getReset = {getReset} needToReset = {reset} updateMaxNumber = {updateMaxNumber} />
      
    </div>

  );
}

export default App;
