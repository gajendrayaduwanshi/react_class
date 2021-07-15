import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//before and after every rendor()
//what are lifcycle methods in functions based component - no one, but we can use hooks - useEffect for side effect  functionalities for ... componentDidMount()

function MyUseEffectExample(){
  const [count, setCount] = useState(0)

  useEffect( (e) => {
    console.log("hello from useEffect()")
    document.title = `you clicked ${count} times`;


   /*  if (count == 5 ){
      document.body.style = 'background: red;';
      } 

      if(count == 5){ e.disabled = true; }  */

  }

  );

  return(
    <div>
      <p>Click on this button to count {count} many times.</p>
      <button onClick={ () => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

  ReactDOM.render(
    <MyUseEffectExample />
    ,document.getElementById("root") );