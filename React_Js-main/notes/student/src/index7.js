import React,{Component} from 'react';
import ReactDOM from 'react-dom';

function MyHello(props){
  return <h1>Hi from my hello.</h1>
}

function YourHello(props){
  return <h1>Hi from your hello.</h1>
}

function SayHello(props){
  const isTrue = props.isTrue;

  if(isTrue){
    return <MyHello />;
  }
  return <YourHello />;
}


ReactDOM.render(
  <SayHello isTrue={false} />, document.getElementById('root')
);