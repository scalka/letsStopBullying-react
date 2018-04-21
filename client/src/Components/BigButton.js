import React from 'react';

export const BigButton = (props) => {
  console.log(props);
  return(
    <div className="card bigButton">
      <div className="card-image">
        <figure className="image is-4by3">
          <img className="menuImage" src={ props.image } alt={props.moduleName}/>
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-size-6">{props.moduleName}</p>
      </div>
    </div>
  );
};

