import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(1)
    function incr(){
        setCount(
            function(oldCount){
                return oldCount + 1
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

    return (
      <div className="Counter">
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr} className = "addNum">Click to add 1 to counter</button>
        <p></p>
        <button onClick={reset} className = "reset">Reset counter</button>
      </div>
    );
  }
  
  export default Counter;