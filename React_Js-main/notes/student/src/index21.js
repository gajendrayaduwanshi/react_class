import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Example1(props){
  return <div>this is a simple component 1111.</div>
}

const Example2 = () => {
  return <div>this is a simple component 2222.</div>
}

class Example3 extends React.Component{
  render(){
    return <div>this is a simple component 3333.</div>
  }
}

ReactDOM.render(
  <Example3 />, document.getElementById('root')
 );