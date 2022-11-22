import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(1)
    const [delta, setDelta] = useState(1)
    function incr(){
        setCount(
            function(oldCount){
                return oldCount + delta
            }
        )
        // console.log(count)
    }
    function reset(){
      setCount(
          function(oldCount){
              return 0
          }
      )
    }
    function handleDelta(event){
      setDelta(Number(event.target.value))
    }
    return (
      <div className="Counter">
        <h1>Counter</h1>
        <input type = "number" value = {delta} onChange = {handleDelta}/>
        {/* we'll put in a function that will activate setDelta */}
        <p>Counter is at {count}</p>
        <button onClick={incr} className = "addNum">Click to add {delta} to counter</button>
        <p></p>
        <button onClick={reset} className = "reset">Reset counter</button>
      </div>
    );
  }
  
  export default Counter;