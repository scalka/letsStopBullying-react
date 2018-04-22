import React, {Component} from 'react';
import SmallButton from '../SmallButton';
import DefinitionVideo from '../DefinitionVideo';
import {Types} from './Types';

class BullyingMain extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      active: 'buttons'
    };
  }
  componentWillMount() {
    if(this.props.location.state) {
      this.setState({
        data: this.props.location.state
      });
    }
  }

  changeActiveElement(element) {
    console.log(element);
    this.setState({
      active: element
    });
  }

  render() {
    console.log(this.state.data);
    let smallButtons = []; // definition, types, signs buttons
    for (let element in this.state.data){
      if(element === 'definition' || element === 'types' || element === 'signs') {
        smallButtons.push(
          <SmallButton active={this.state.active} title={element} changeActiveElement={(e) => this.changeActiveElement(element)}/>
        );
      }
    }


    return (
      <section className="section">
        <div className="container">
          {this.state.active === 'buttons' ? <div className="columns is-centered"><div className="columns is-centered">{smallButtons}</div></div> : null}

          {this.state.active === 'definition' ? <DefinitionVideo active={this.state.active} videoSrc={this.state.data.definition}/> : null}

          {this.state.active === 'types' ? <Types active={this.state.active} types={this.state.data.types}/> : null}
        </div>
      </section>

    );
  }
}

export default BullyingMain;
