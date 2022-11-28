import { useState } from "react";

function Counter(props) {
    const {delta} = props
    const {max} = props
    // props is an object
    const [count, setCount] = useState(1)
    
    function incr(){
      setCount(
          function(oldCount){
            if ((oldCount + delta) >= max){
              return 0
            }
            return oldCount + delta
            
          }
      )  
    }

    function reset(){
      setCount(
          function(oldCount){
              return 0
          }
      )
    }

    return (
      <div className="Counter">
        <h1>Counter</h1>
        {/* we'll put in a function that will activate setDelta */}
        <p>Counter is at {count}</p>
        <button onClick={incr} className = "addNum">Click to add {delta} to counter</button>
        <p></p>
        <button onClick={reset} className = "reset">Reset counter</button>
      </div>
    );
  }
  
  export default Counter;