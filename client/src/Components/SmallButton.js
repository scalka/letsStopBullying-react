import React from 'react';

export const SmallButton = (props) => {
  let imagePath = null;
  if (props.title === 'definition') {
    imagePath = 'definition.png';
  } else if (props.title === 'types') {
    imagePath = 'types.png';
  } else if (props.title === 'signs') {
    imagePath = 'signs.png';
  }

  return(
    <div className="level-item">
      <div className="">
        <figure className="image">
          <img className="menuImage" onClick={props.changeActiveElement} src={ imagePath !== null ? window.location.origin + `/pictures/${imagePath}` : window.location.origin + `/pictures/${props.imagePath}` } alt={props.title}/>
        </figure>
      </div>
      <div className="">
        <p className="title">{props.title}</p>
      </div>
    </div>
  );
};