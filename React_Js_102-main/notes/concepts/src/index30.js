import React from 'react';
import ReactDOM from 'react-dom';

//what is bind()?
//why do we bind handler in constructor() - to put in components context, we are passing handler to another
//component so binding and passing, to have access to state and props of current component
//other this inside handler will be undefined, does not know which object handler
//can we use setState inside render()- yes we can use arrow

class MyToggleComp extends React.Component{
  constructor(props){
    super(props);
    this.state = {isOn:true};
    //this.myHandler = this.myHandler.bind(this);
  }

 /*  myHandler(){
    console.log(this.props+this.state)
    this.setState( state => ({      
      isOn: !state.isOn
    })
    );
    console.log("yes state is getting changed.");
  } */

  render(){
    var myfunc = () => this.setState( state => ({      
      isOn: !state.isOn
    })
    );

    return(
      <button onClick={myfunc}>{this.state.isOn ? 'ON':'OFF'}</button>
    );
  }
}

ReactDOM.render(
  <MyToggleComp />
  ,document.getElementById("root") );