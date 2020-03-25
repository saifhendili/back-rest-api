import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import AddContact from './component/addcontact'
import './App.css';
import GetContacts from './component/getcontact'

class App extends Component {
  
  render() {
    return (
      <div>
{  <GetContacts />}
      </div>
    )
  }
}
export default App