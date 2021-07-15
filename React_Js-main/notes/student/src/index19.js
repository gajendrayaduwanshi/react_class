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

function toRupees(rupees){
  return (rupees*75);
}

function toDollar(rupees){
  return (rupees/75);
}

class CurrenyInput extends React.Component{
  constructor(props){
    super(props);
    //this.state = { currency: ''}; not good idea because no connection between two component
    this.handleChange = this.handleChange.bind(this);    
  }

  handleChange(event){
    //this.setState({currency : event.target.value});
    this.props.onCurrencyChange(event.target.value);
  }

  render(){
    //const currency = this.state.currency;
    const currency = this.props.currency;
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
  constructor(props){
    super(props);
    this.state = { currency: '' , unit: 'r'};
    this.handleDollarChange = this.handleDollarChange .bind(this); 
    this.handleRupeeChange = this.handleRupeeChange .bind(this); 
  }

  handleRupeeChange(currency){
    this.setState({'unit':'r', currency})
  }

  handleDollarChange(currency){
    this.setState({'unit':'d', currency})
  }


  render(){
    const currency = this.state.currency;
    const unit = this.state.unit;
    const rupees = unit === 'd' ? toRupees(currency) : currency;
    const dollar = unit === 'r' ? toDollar(currency) : currency;

    return(
      <div>
        <CurrenyInput unit='r' currency={rupees} onCurrencyChange={this.handleRupeeChange}/>
        <CurrenyInput unit='d' currency={dollar} onCurrencyChange={this.handleDollarChange}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />, document.getElementById('root')
 );