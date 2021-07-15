import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//preventing from rendering - return null

function WarningMessage(props){
  if(!props.warn){
    return null;
  }

  return(
    <div className="warning">
      This is warning!
    </div>
  );  
}

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(){
    this.setState(state => ({showWarning: !state.showWarning}));
  }

  render(){
    return(
      <div>
        <WarningMessage warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>

    );
  }
}

ReactDOM.render(
  <MyComponent />, document.getElementById('root')
);