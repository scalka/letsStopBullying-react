import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={window.location.origin + '/pictures/Home2.png'} alt='Home'/>
          </a>
        </div>
      </nav>
    );
  }
}

export default Menu;
