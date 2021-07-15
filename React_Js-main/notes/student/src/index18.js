import React,{Component} from 'react';
import ReactDOM from 'react-dom';

function CurrencyMessage(props){
  if(props.rupees >= 1000){
    return <p>this is too expensive.</p>
  }
  return <p>No this is not too expensive.</p>
}

const unitName = {
  r: 'rupees',
  d: 'dollar'
};



class CurrenyInput extends React.Component{
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
    const unit = this.props.unit;

    return(
      <fieldset>
        <legend>Enter your currency in {unitName[unit]}</legend>
        <input value={currency} onChange={this.handleChange}/>
        <CurrencyMessage rupees={currency} />
      </fieldset>

    );
  }
}

class Calculator extends React.Component{

  render(){
    return(
      <div>
        <CurrenyInput unit='r'/>
        <CurrenyInput unit='d'/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />, document.getElementById('root')
 );