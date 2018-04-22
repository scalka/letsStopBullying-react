import React, {Component} from 'react';
import SmallButton from '../SmallButton';
import DefinitionVideo from '../DefinitionVideo';

export class Verbal extends Component {
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
    let smallButtons = []; // definition, types, signs buttons
    for (let element in this.state.data){
      if(element === 'definition' || element === 'types' || element === 'signs') {
        smallButtons.push(
          <SmallButton active={this.state.active} title={element} changeActiveElement={(e) => this.changeActiveElement(element)}/>
        );
      }
    }

    console.log(this.props.verbalData);
    return(
      <div>


      </div>
    );
  }
};
