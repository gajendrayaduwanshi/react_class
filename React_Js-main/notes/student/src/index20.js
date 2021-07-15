import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyBorder(props){
  return(
    <div className={'MyBorder MyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function MyDialogBox(){
  return(
  <div>
    <MyBorder color="green">
      <h1 className="MyDialog-title">Welcome to React Js</h1>
      <p className="MyDialog-message">Thank you very much.</p>
    </MyBorder>
    <MyBorder color="red">
      <h1 className="MyDialog-title">Welcome to React Js</h1>
      <p className="MyDialog-message">Thank you very much.</p>
    </MyBorder>
    <MyBorder color="blue">
      <h1 className="MyDialog-title">Welcome to React Js</h1>
      <p className="MyDialog-message">Thank you very much.</p>
    </MyBorder>
  </div>
  );
}

ReactDOM.render(
  <MyDialogBox />, document.getElementById('root')
 );