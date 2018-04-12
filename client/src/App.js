import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { BigButton } from './Components/BigButton';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route exact path='/' component={Home}/>


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
