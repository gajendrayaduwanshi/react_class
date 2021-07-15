import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//working with list

const mylist = [1,2,3,4,5];
const listElements = mylist.map( (i) => <li>{i}</li>);

ReactDOM.render(
  <ui>{listElements}</ui>, document.getElementById('root')
);