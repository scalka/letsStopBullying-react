import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BigButton from '../BigButton';

class WhatIsMain extends Component {
  constructor() {
    super();
    this.state = {
      bullyingData: []
    };
  }
  componentWillMount() {
    fetch('bullying')
      .then(res => {
        if(res.ok) return res.json();
      })
      .then(data => {
        this.setState({
          bullyingData: data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.bullyingData);
    let topicButtons = this.state.bullyingData.map( topic => {
      return (
        <div className="column is-half">
          <Link to={{
            pathname: `/${topic.url}`,
            state: topic
          }}>
            <BigButton moduleName={ topic.title } image={ window.location.origin + `/pictures/${topic.imagePath}`} />
          </Link>
        </div>
      );
    });



    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-6">
            {topicButtons}
          </div>
        </div>
      </section>
    );
  }
}

export default WhatIsMain;
