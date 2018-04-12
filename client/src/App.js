import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import { BigButton } from './Components/BigButton';

class App extends Component {
  render() {
    return (

      <BigButton moduleName={"Name"} image={`../../pictures/Anger.png`} />

    );
  }
}

export default App;
