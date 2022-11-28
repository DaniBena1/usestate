import './App.css';
import Counter from './Counter';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1)
  function handleDelta(event){
    setDelta(Number(event.target.value))
  }

  const [max, setMax] = useState(1)
  function maxValue(event){
    setMax(Number(event.target.value))
  }

  return (
    <div className="App">
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      <p>
        max: <input type = "number" value = {max} onChange = {maxValue}/>
      </p>
      
      <Counter delta = {delta} max = {max}/>
      <Counter delta = {delta} max = {max}/>
      
    </div>

  );
}

export default App;
