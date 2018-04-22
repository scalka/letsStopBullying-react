import React from 'react';
import {translate} from 'react-i18next';

const SmallButton = (props) => {
  const { t, i18n } = props;

  let imagePath = null;
  if (props.title === 'definition') {
    imagePath = 'definition.png';
  } else if (props.title === 'types') {
    imagePath = 'types.png';
  } else if (props.title === 'signs') {
    imagePath = 'signs.png';
  }

  return(

    <div class="tile is-parent">
      <article class="tile is-child box is-success">
        <div class="content">
          <figure className="image is-128x128">
            <img className="" onClick={props.changeActiveElement} src={ imagePath !== null ? window.location.origin + `/pictures/${imagePath}` : window.location.origin + `/pictures/${props.imagePath}` } alt={props.title}/>
          </figure>
        </div>
        <div class="content">
          <p className="title tile is-child">{t('smallButtons.' + props.title)}</p>
        </div>
      </article>
    </div>

  );
};

export default translate("translation")(SmallButton);
