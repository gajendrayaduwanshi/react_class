import React from 'react';
import ReactDOM from 'react-dom';

class StudentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {stname: '',isPass: true, noOfAttempts: 5};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    //this.setState({value: event.target.value});
    const target = event.target;
    const value = target.name === "isPass" ? target.checked: target.value;
    const name = target.name;

    console.log(name+" "+value);
    this.setState({[name]:value});

  }

  handleSubmit(event){
    alert('Are you sure you want to submit? ' + this.state.isPass + " "+ this.state.noOfAttempts);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.stname} onChange={this.handleChange} />
        </label>
        <label>
          IsPass : 
          <input name="isPass" type="checkbox" checked={this.state.isPass} onChange={this.handleChange} />
        </label>
        <label>
          <input name="noOfAttempts" type="number" value={this.state.noOfAttempts} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

ReactDOM.render(
  <StudentForm />
  ,document.getElementById("root") );