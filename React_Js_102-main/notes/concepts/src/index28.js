import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function getUser(){
  return{
    id: 101,
    name: "Rajesh",
    age:25,
    street: "12th cross road",
    state: "KA"
  }
}

function ShowUser(props){
  return(
    <div>
      <p>User Id: {props.id}</p>
      <p>User Name: {props.name}</p>
      <p>User Age: {props.age}</p>
    </div>
  )
}

function UserAddress(props){
  return(
    <div>
      <p>User Id: {props.id}</p>
      <p>User address street: {props.street}</p>
      <p>User address state: {props.state}</p>
    </div>
  )
}

var HigherOrderComponent = function(WrappedComponent){

  return class UserDetailComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = getUser();
      //console.log(this.state)
      //console.log(...this.state)
    }

    render(){
      return(
        <div>
          <WrappedComponent {...this.state}></WrappedComponent>
        </div>
      )
    }
  }
}

var UserDetail = HigherOrderComponent(ShowUser)
var UserAddressDetail = HigherOrderComponent(UserAddress)

/* 
ReactDOM.render(
  <UserDetail />
  ,document.getElementById("root") ); */

  ReactDOM.render(
    <UserAddressDetail />
    ,document.getElementById("root") );