import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const i = [1,2,3,4,5,6];

function ListTitem(props){
  return <li>{props.value}</li>
}

ReactDOM.render(
  <ListTitem key={i.toString()} value={i} />, document.getElementById('root')
 );
