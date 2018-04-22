import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {BigButton} from './BigButton';

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
      return (
        <div className="column is-half">
          <Link to={{
            pathname: `/${module.url}`,
            state: module
          }}>
            <BigButton moduleName={ module.moduleName } image={ window.location.origin + `/pictures/${module.imagePath}`} />
          </Link>
        </div>
      );
    });

    return (
      <section className="section">
        <div className="columns is-multiline">
          <p>s</p>
          {moduleButtons}
        </div>
      </section>

    );
  }
}

export default Home;
