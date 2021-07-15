import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class CountryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:'India'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('Are you sure you want to submit form?'+this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Please select your favorite country.
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Bali">Bali</option>            
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

ReactDOM.render(
  <CountryForm />, document.getElementById('root')
 );