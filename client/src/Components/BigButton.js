import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export const BigButton = (props) => {
  console.log(props);
  return(
    <div className="column is-4">
        <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={ props.image ? props.image : 'http://via.placeholder.com/400x400'  } alt={this.props.moduleName}/>
              </figure>
            </div>

          <div className="card-content">
            <p className="title is-size-6">{props.moduleName}</p>
          </div>
        </div>
      </div>
  );
}
