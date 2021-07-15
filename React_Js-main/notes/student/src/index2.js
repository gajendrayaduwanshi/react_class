import React,{Component} from 'react';
import ReactDOM from 'react-dom';

function Welcome(props){
  return <h1>Hello ,{props.name}</h1>;
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    )
  }
}

const element1 = <div />;
const element2 =<Welcome name="Rajesh"/>;

//ReactDOM.render(<App />,document.getElementById('root'))

ReactDOM.render(element2,document.getElementById('root'))