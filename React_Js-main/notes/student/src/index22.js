import React,{Component, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//React Hook
//Returns a stateful value, and a function to update it.
function MyComponentWithHook(){
  //this.state =
  //const[count,updateCount] = useState(0);
  const[count,setCount] = useState(0);

  return(
    <div>
      <p>Click Me {count} times.</p>
      <button onClick={ () => setCount(count+1)}>
          ClickMe
      </button>
    </div>

  );
}

ReactDOM.render(
  <MyComponentWithHook />, document.getElementById('root')
 );