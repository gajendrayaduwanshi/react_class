import React,{Component} from 'react';
import ReactDOM from 'react-dom';

function CurrencyMessage(props){
  if(props.rupees >= 1000){
    return <p>this is too expensive.</p>
  }
  return <p>No this is not too expensive.</p>
}

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { currency: ''};
    this.handleChange = this.handleChange.bind(this);    
  }

  handleChange(event){
    this.setState({currency : event.target.value});
  }

  render(){
    const currency = this.state.currency;

    return(
      <fieldset>
        <legend>Enter your currency:</legend>
        <input value={currency} onChange={this.handleChange}/>
        <CurrencyMessage rupees={currency} />
      </fieldset>

    );
  }

}

ReactDOM.render(
  <Calculator />, document.getElementById('root')
 );