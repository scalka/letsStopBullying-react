import React, {Component} from 'react';
import SmallButton from '../SmallButton';
import DefinitionVideo from '../DefinitionVideo';
import {Verbal} from './Verbal';

export class Types extends Component {
  constructor() {
    super();
    this.state = {
      active: 'types'
    };
  }

  changeActiveElement(element) {
    console.log(element);
    this.setState({
      active: element
    });
  }



  render() {
    let typesButtons = this.props.types.map( type => {
      return (
        <SmallButton key={type.type} active={this.state.active} title={type.type} imagePath={`${type.type}.png`} changeActiveElement={(e) => this.changeActiveElement(type.type)}/>
      );
    });
    console.log(this.state.active);
    return(
      <div>
        { this.state.active === 'types' ? <div className="level"> {typesButtons}  </div> : null}

        { this.state.active === 'physical' ? <DefinitionVideo active={this.state.active} videoSrc={this.props.types[0].definition}/> : null}

        { this.state.active === 'verbal' ? <Verbal  verbalData={this.props.types[1]}/> : null }

      </div>
    );
  }
};
