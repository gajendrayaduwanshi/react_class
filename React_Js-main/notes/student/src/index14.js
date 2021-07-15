import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//forms maintain state
/*{ <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
    <input type="submit" value="Submit" />
</form>} */

//we achive this in react using controlled component
//controlled vs uncontrolled component
//cc - react handles data
//ucc - DOM handles data
//mutable vs immutable state

class MyFOrm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''};
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
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
            <input type="submit" value="Submit" />
        </form>
    );
  }

}

ReactDOM.render(
  <MyFOrm />, document.getElementById('root')
 );