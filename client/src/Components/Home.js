import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { BigButton } from './BigButton';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      modulesData: []
    };
  }

  componentWillMount() {
    fetch('modulesCollection')
      .then(res => {
        if(res.ok) return res.json();
      })
      .then(data => {
        this.setState({
          modulesData: data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const moduleButtons = this.state.modulesData.map( module => {
      console.log(module);
      return <BigButton moduleName={ module.moduleName } image={ window.location.origin + `/pictures/${module.imagePath}`} />
    } );
    //

    return (

      <div>
        {moduleButtons}
      </div>

    );
  }
}

export default Home;
