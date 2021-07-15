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