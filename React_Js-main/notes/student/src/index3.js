import React,{Component} from 'react';
import ReactDOM from 'react-dom';

/* function tick(){
  const element = (
    <div>
      <h1>Hello there</h1>
      <h2>It is {new Date().toLocaleDateString()}.</h2>
    </div>
  )

  ReactDOM.render(element,document.getElementById('root'))
}
 */

function Clock(props){
  return(
    <div>
      <h1>Hello there</h1>
      <h2>It is {props.date.toLocaleDateString()}.</h2>
    </div>
  );
}

function tick(){
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root'))
}


setInterval(tick,1000);