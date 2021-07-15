import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//working with list

function MyList(props){
  const mylist = props.numbers;
  const listElements = mylist.map((i) =>
    <li key={i.toString()}>
      {i}
    </li>
  );

  return(
    <ul>{listElements}</ul>
  );
}

const numbers  = [1,2,3,4,5];

ReactDOM.render(
 <MyList numbers={numbers} />, document.getElementById('root')
);