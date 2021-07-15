import React,{Component, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//React Hook
//Returns a stateful value, and a function to update it.
function MyComponentWithHook(){  
  const[count,setCount] = useState(0);
  const[age,setAge] = useState(20);
  const[obj,setObj] = useState({currency : 10, unit:'r'});

  return(
    <div>
      <p>Click Me {count} times.</p>
      <button onClick={ () => setCount(count+1)}>
          ClickMe
      </button>

      <p>My age is {age}.</p>
      <button onClick={ () => setAge(age+1)}>
          ClickMe
      </button>

      <p>My money is {obj.currency} {obj.unit}.</p>
      <button onClick={ () => {setObj(obj.currency)}}>
          ClickMe
      </button>

    </div>

  );
}

ReactDOM.render(
  <MyComponentWithHook />, document.getElementById('root')
 );